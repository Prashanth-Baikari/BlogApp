package com.BlogApplication.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.BlogApplication.Entity.Comment;
import com.BlogApplication.Service.CommentServiceImpl;


@CrossOrigin(origins= "http://localhost:4200")
@RestController
public class CommentController {
	
	@Autowired
	private CommentServiceImpl commentServiceImpl;
	
	@PostMapping("/postcomment/{uid}/{pid}")
	public Comment postComment(@RequestBody Comment comment, @PathVariable Long uid, @PathVariable Long pid) {
		return commentServiceImpl.postComment(comment, uid, pid);
	}
	
	@GetMapping("/comment/{id}")
	public Comment getComment(@PathVariable Long id) {
		return commentServiceImpl.getComment(id);
	}
	
	@GetMapping("comments/{pid}")
	public List<Comment> getComments(@PathVariable Long pid){
		return commentServiceImpl.getComments(pid);
	}
}
