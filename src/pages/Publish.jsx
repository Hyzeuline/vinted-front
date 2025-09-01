import { useState } from "react";
import axios from "axios";

const Publish = props => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");

  const userToken =
    "OETakmmRCoA5DdejtaLIrei579yRja7P4i5VvYL12G6QNO6OAPff2Sapvp84NvqF";

  return (
    <section>
      <div className="container">
        <form
          onSubmit={async event => {
            event.preventDefault();

            const formData = new FormData();
            formData.append("files", file);
            formData.append("title", title);

            try {
              const response = await axios.post(
                `${import.meta.env.VITE_API_URL}offer/publish`,
                formData,
                {
                  headers: {
                    Authorization: "Bearer " + userToken,
                    "Content-Type": "multipart/form-data",
                  },
                }
              );

              alert(JSON.stringify(response.data));
            } catch (err) {
              if (err.response.status === 500) {
                console.error("An error occurred");
              } else {
                console.error(err.response.data.msg);
              }
            }
          }}
        >
          <input
            type="text"
            onChange={event => {
              setTitle(event.target.value);
            }}
            value={title}
          />
          <input
            type="file"
            onChange={event => {
              setFile(event.target.files[0]);
            }}
          />
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Publish;
