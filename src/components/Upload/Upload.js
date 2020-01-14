import React, { useCallback, useContext, useState } from "react";
import { Button, Form, Loader, Input } from "semantic-ui-react";
import useUpload from "../../hooks/useInput";
import { SessionContext } from "../../hooks/useAuth";

// import useInput from "../../hooks/useInput";

const useFileUpload = file => {
  const { state } = useContext(SessionContext);
  const uploadAction = useCallback(async () => {
    console.log(file);
    //   reader.readAsDataURL(file);
    //   reader.onload = function() {
    //     let image = new Date().getTime().toString();
    //     image += ".jpg";
    //     let body = {
    //       token: state.session.body,
    //       image_name: image,
    //       force: 1,
    //       image: reader.result.replace("data:image/jpeg;base64,", "")
    //     };
    //     console.log(body);
    //     fetch(`${process.env.REACT_APP_API_URL}/uploadimage`, {
    //       method: "POST",
    //       headers: {},
    //       body: JSON.stringify(body)
    //     });
    //     var response = fetch(`${process.env.REACT_APP_API_URL}/imagelist`, {
    //       method: "POST",
    //       headers: {},
    //       body: JSON.stringify(body)
    //     });
    //     console.log(response);
    //   };
  });

  return uploadAction;
};

const Upload = () => {
  const [file, setFile] = useState(null);
  const upload = useFileUpload(file);

  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" id="file" name="filename" onChange={onFileChange} />
      <Button disabled={!file} onClick={upload}>
        Submit
      </Button>
    </div>
  );
};

export default Upload;
