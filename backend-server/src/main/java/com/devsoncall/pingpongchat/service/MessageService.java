package com.devsoncall.pingpongchat.service;

import com.devsoncall.pingpongchat.dto.request.SendMessageRequestDTO;
import com.devsoncall.pingpongchat.entity.Message;
import com.devsoncall.pingpongchat.entity.User;
import com.devsoncall.pingpongchat.exception.ChatException;
import com.devsoncall.pingpongchat.exception.MessageException;
import com.devsoncall.pingpongchat.exception.UserException;

import java.util.List;
import java.util.UUID;

public interface MessageService {

    Message sendMessage(SendMessageRequestDTO req, UUID userId) throws UserException, ChatException;

    List<Message> getChatMessages(UUID chatId, User reqUser) throws UserException, ChatException;

    Message findMessageById(UUID messageId) throws MessageException;

    void deleteMessageById(UUID messageId, User reqUser) throws UserException, MessageException;

}
