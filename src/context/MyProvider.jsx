import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';

import AppContext from './AppContext';

function MyProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogUserOpen, setDialogUserOpen] = useState(false);
  const [dialogUserProfileOpen, setDialogUserProfileOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    id: 0,
    nome: '',
    email: '',
    password: '',
    role: '',
  });
  const value = useMemo(
    () => ({
      users,
      setUsers,
      dialogOpen,
      setDialogOpen,
      dialogUserOpen,
      setDialogUserOpen,
      dialogUserProfileOpen,
      setDialogUserProfileOpen,
      selectedUser,
      setSelectedUser,
    }),
    [
      users,
      setUsers,
      dialogOpen,
      setDialogOpen,
      dialogUserOpen,
      setDialogUserOpen,
      dialogUserProfileOpen,
      setDialogUserProfileOpen,
      selectedUser,
      setSelectedUser,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default MyProvider;

MyProvider.propTypes = {
  children: propTypes.node.isRequired,
};
