import React, { useState, useEffect } from "react";

const ProfileStatus = ({status, updateStatus}) => {

  const [editMode, setEditMode] = useState(false);
  const [newStatus, setNewStatus] = useState(status);

  useEffect(() => {
    setNewStatus(status);
  }, [status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(newStatus);
  }

  const onStatusChange = (e) => {
    setNewStatus(e.currentTarget.value);
  }

  return (

    <>
      {!editMode ? (
        <div>
          <p onDoubleClick={activateEditMode}>{newStatus || 'no status'}</p>
        </div>
      ) : (
        <div>
          <input
            type='text'
            onChange={onStatusChange}
            autoFocus
            onBlur={deactivateEditMode}
            value={newStatus}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
