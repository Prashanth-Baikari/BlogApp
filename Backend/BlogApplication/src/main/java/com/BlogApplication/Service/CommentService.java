package com.BlogApplication.Service;

import java.util.List;

import com.BlogApplication.Entity.Comment;

public interface CommentService {
	
	Comment postComment(Comment comment, Long uid, Long pid);
	
	Comment getComment(Long id);
	
	List<Comment> getComments(Long id);
}
