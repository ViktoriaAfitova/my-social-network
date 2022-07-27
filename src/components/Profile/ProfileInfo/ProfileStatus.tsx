import React, { useState, useEffect, ChangeEvent } from "react";

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

type StateType = {
  editMode: boolean
  status: string
}

const ProfileStatus: React.FC<PropsType & StateType> = ({status, updateStatus}) => {

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

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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
