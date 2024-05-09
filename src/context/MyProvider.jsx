import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';

import AppContext from './AppContext';

function MyProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [turnstileData, setTurnstileData] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogUserOpen, setDialogUserOpen] = useState(false);
  const [dialogUserProfileOpen, setDialogUserProfileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [selectedUser, setSelectedUser] = useState({
    id: 0,
    nome: '',
    email: '',
    password: '',
    role: '',
  });
  const [selectedVacancy, setSelectedVacancy] = useState({
    id: 0,
    description: '',
    sensor_id: '',
    port_r: '',
    port_g: '',
    port_b: '',
    micro_id: '',
    id_occupied: false,
  });
  const [selectedTurnstile, setSelectedTurnstile] = useState({
    id: 0,
    description: '',
    is_open: false,
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
      userProfile,
      setUserProfile,
      isLoading,
      setIsLoading,
      selectedVacancy,
      setSelectedVacancy,
      vacancies,
      setVacancies,
      turnstileData,
      setTurnstileData,
      selectedTurnstile,
      setSelectedTurnstile,
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
      userProfile,
      setUserProfile,
      isLoading,
      setIsLoading,
      selectedVacancy,
      setSelectedVacancy,
      vacancies,
      setVacancies,
      turnstileData,
      setTurnstileData,
      selectedTurnstile,
      setSelectedTurnstile,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default MyProvider;

MyProvider.propTypes = {
  children: propTypes.node.isRequired,
};
