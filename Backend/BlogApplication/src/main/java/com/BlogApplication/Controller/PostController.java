package com.BlogApplication.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.BlogApplication.Entity.Post;
import com.BlogApplication.Service.PostServiceImpl;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class PostController {
	
	@Autowired
	private PostServiceImpl postServiceImpl;
	
	@PostMapping("/createpost/{uid}")
	public Post createPost(@RequestBody Post post, @PathVariable Long uid) {
		return postServiceImpl.createPost(post, uid);
	}
	
	@GetMapping("/posts")
	public List<Post> getPosts(){
		return postServiceImpl.getPosts();
	}
	
	@GetMapping("/posts/{pid}")
	public Post getPost(@PathVariable Long pid) {
		return postServiceImpl.getPost(pid);
	}
	
	@GetMapping("/myposts/{uid}")
	public List<Post> getMyPosts(@PathVariable Long uid){
		return postServiceImpl.getMyPosts(uid);
	}
	

}
