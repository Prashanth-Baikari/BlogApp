package com.BlogApplication.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BlogApplication.Entity.Post;
import com.BlogApplication.Entity.User;

public interface PostRepository extends JpaRepository<Post, Long> {
	
	List<Post> findAllByUser(User user);

}
