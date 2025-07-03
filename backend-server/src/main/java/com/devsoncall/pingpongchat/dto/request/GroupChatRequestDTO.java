package com.devsoncall.pingpongchat.dto.request;

import java.util.List;
import java.util.UUID;

public record GroupChatRequestDTO(List<UUID> userIds, String chatName) {
}
