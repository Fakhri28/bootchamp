import { Tracker } from 'meteor/tracker';
import { Slingshot } from 'meteor/edgee:slingshot';

import _ from 'lodash';

import roundPercentage from './roundPercentage';

const beginUpload = (parent, entity, entityId, file, type, refs, history, routeAfter) => {
  const metaContext = {
    entity,
    entityId,
    type,
    refs,
  };

  let computation;
  const uploader = new Slingshot.Upload('saveFileToS3', metaContext);
  if (uploader.validate(file)) alert('Error uploading...');

  uploader.send(file, (error, response) => {
    computation.stop();
    if (error) {
      alert(`Error uploading...${error}`);
      parent.setState({ [`progress_${type}`]: 'Error' });
    } else {
      parent.setState({ [`progress_${type}`]: '' });

      if (routeAfter)
        history.push(
          routeAfter === 'filedetail'
            ? `/File/${response.substring(response.lastIndexOf('/') + 1)}`
            : routeAfter,
        );
    }
  });

  computation = Tracker.autorun(() => {
    if (!isNaN(uploader.progress())) {
      parent.setState({
        [`progress_${type}`]: `${roundPercentage(uploader.progress() * 100, 0)} %`,
      });
    }
  });
};

const uploadToS3 = (event, entity, entityId, type, refs, history, routeAfter, parent) => {
  const input = event.target;
  _.each(input.files, (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      beginUpload(parent, entity, entityId, file, type, refs);
    };
    reader.readAsDataURL(file);
  });
};

export default uploadToS3;
