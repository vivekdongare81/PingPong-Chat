package com.devsoncall.pingpongchat.dto.response;

import lombok.Builder;

import java.time.LocalDateTime;
import java.util.*;

import com.devsoncall.pingpongchat.entity.Message;

@Builder
public record MessageDTO(UUID id, String content, LocalDateTime timeStamp, UserDTO user, Set<UUID> readBy) {

    public static MessageDTO fromMessage(Message message) {
        if (Objects.isNull(message)) return null;
        return MessageDTO.builder()
                .id(message.getId())
                .content(message.getContent())
                .timeStamp(message.getTimeStamp())
                .user(UserDTO.fromUser(message.getUser()))
                .readBy(new HashSet<>(message.getReadBy()))
                .build();
    }

    public static List<MessageDTO> fromMessages(Collection<Message> messages) {
        if (Objects.isNull(messages)) return List.of();
        return messages.stream()
                .map(MessageDTO::fromMessage)
                .toList();
    }

}
