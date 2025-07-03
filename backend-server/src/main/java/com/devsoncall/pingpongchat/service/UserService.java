package com.devsoncall.pingpongchat.service;

import com.devsoncall.pingpongchat.dto.request.UpdateUserRequestDTO;
import com.devsoncall.pingpongchat.entity.User;
import com.devsoncall.pingpongchat.exception.UserException;

import java.util.List;
import java.util.UUID;

public interface UserService {

    User findUserById(UUID id) throws UserException;

    User findUserByProfile(String jwt) throws UserException;

    User updateUser(UUID id, UpdateUserRequestDTO request) throws UserException;

    List<User> searchUser(String query);

    List<User> searchUserByName(String name);

}
