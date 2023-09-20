package com.BlogApplication.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BlogApplication.Entity.Comment;
import com.BlogApplication.Entity.Post;

public interface CommentRepository extends JpaRepository<Comment, Long> {

	List<Comment> findAllByPost(Post post);
}
