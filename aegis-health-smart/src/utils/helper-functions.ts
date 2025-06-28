const uploadImageToCloudinary = async (file: File) => {
    const CLOUD_NAME: string = 'dfzlda2tr'
    const UPLOAD_PRESET = "unsigned_upload"
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,{
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data)
      const url = data.url as string
      return url  
    } catch (error) {
      console.log(error)
    }
    
  }

  export const handeleUploadImage = async ({file , localPreview, liveURLPreview } : {
    file: File,
    localPreview: (localURL: string) => void,
    liveURLPreview: (liveURL: string) => void
  }) => {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        localPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
    try {
      const url = await uploadImageToCloudinary(file)
      liveURLPreview(url!)
    } catch (error) {
      console.log(error)
    }
  }
