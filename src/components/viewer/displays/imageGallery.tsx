import * as React from "react";
import FeedFileModel, { IFeedFile } from "../../../api/models/feed-file.model";


type AllProps = {
  files: IFeedFile[];
};

class ImageGallery extends React.Component<AllProps> {
  render() {
    console.log("ImageGallery");
    return (
      <React.Fragment>
        <div>Gallery will go here</div>
      </React.Fragment>
    );
  }

  buildImageObject(file: string) {
    return {
      photo: file,
      caption: "test image"
    };
  }
}

export default React.memo(ImageGallery);
