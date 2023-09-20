package com.BlogApplication.Service;

import java.util.List;

import com.BlogApplication.Entity.Post;

public interface PostService {

	Post createPost(Post post, Long uid);
	
	List<Post> getPosts();
	
	Post getPost(Long pid);
	
	List<Post> getMyPosts(Long uid);
	
}
