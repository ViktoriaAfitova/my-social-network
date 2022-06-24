import React, { useState } from "react";

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
  }

  return (
    <>
      {!editMode ? (
        <div>
          <p onDoubleClick={activateEditMode}>{props.status}</p>
        </div>
      ) : (
        <div>
          <input autoFocus onBlur={deactivateEditMode} value={props.status} />
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
