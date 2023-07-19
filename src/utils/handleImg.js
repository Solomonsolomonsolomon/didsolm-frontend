export function convertImageToBase64(blob) {
  try {
    return new Promise(async (resolve, reject) => {
      await blob;
      if (!blob) {
        throw new Error("no file selected");
      }

      let reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  } catch (err) {
    console.log("hit");
    reject(err.message);
  }
}
