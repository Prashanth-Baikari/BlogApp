package com.BlogApplication.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BlogApplication.Auth.Service.AuthService;
import com.BlogApplication.Entity.Comment;
import com.BlogApplication.Entity.Post;
import com.BlogApplication.Entity.User;
import com.BlogApplication.Repository.CommentRepository;
import com.BlogApplication.Repository.PostRepository;
import com.BlogApplication.Repository.UserRepository;

@Service
public class PostServiceImpl implements  PostService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AuthService authService;
	
	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Override
	public Post createPost(Post post, Long uid) {
		User user= userRepository.findById(uid).get();
		post.setUser(user);
		authService.getCurrentUser().orElseThrow(()-> new IllegalArgumentException("No userlogged in"));
		return postRepository.save(post);	
	}

	@Override
	public List<Post> getPosts() {
		
		return postRepository.findAll();
	}
	
	@Override
	public Post getPost(Long pid) {
		
		return postRepository.findById(pid).get();
		
	}

	@Override
	public List<Post> getMyPosts(Long uid) {
		
	User user = userRepository.findById(uid).get();
	return	postRepository.findAllByUser(user);
		
	}
	

}
