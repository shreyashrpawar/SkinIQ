export const UploadImage = (imageSrc, navigate) => {
    const data = new FormData()
    console.log("printint",imageSrc)
    data.append("file", imageSrc)
    fetch("http://localhost:5000/predict", {
        method: "POST",
        body: data
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            console.log("Please add a photograph")
        }
        else {
            console.log(data)
            navigate("/form", {state : {data}})
            
        }
    })
    .catch(err => {
        console.log(err.message)
    })
}
export const CaptureImage = (imageSrc, navigate) => {
    const data = new FormData()
    data.append("file", imageSrc)
    console.log(data)
    fetch("http://localhost:5000/upload", {
        method: "put",
        body: data
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            console.log("Please add a photograph")
        }
        else {
            navigate("/form", {state : {data}})
            console.log(data)
        }
    })
    .catch(err => {
        console.log(err.message)
    })
}


export const putForm = (features, currType, currTone, navigate) => {
    console.log(features, currType, currTone, navigate)
    fetch("http://localhost:5000/recommend", {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "features": features, "type":currType, "tone":currTone})
    })
    .then(res => res.json())
    .then(data => {

        if (data.error) {
            console.log("Error")
        }
        else {
            navigate("/recs", {state : {data}})
            console.log(data)
        }
    }).catch(err => {
        console.log(err)
    })
}