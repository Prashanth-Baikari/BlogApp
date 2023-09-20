package com.BlogApplication.Service;

import java.util.List;
import java.util.function.LongFunction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BlogApplication.Entity.Comment;
import com.BlogApplication.Entity.Post;
import com.BlogApplication.Entity.User;
import com.BlogApplication.Repository.CommentRepository;
import com.BlogApplication.Repository.PostRepository;
import com.BlogApplication.Repository.UserRepository;


@Service
public class CommentServiceImpl implements CommentService{

	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public Comment postComment(Comment comment, Long uid, Long pid) {
		User user= userRepository.findById(uid).get();
		Post post= postRepository.findById(pid).get();
		
		comment.setUser(user);
		comment.setPost(post);
		
		return commentRepository.save(comment);

	}

	@Override
	public Comment getComment(Long id) {
		return commentRepository.findById(id).get();
	}

	public List<Comment> getComments(Long pid) {
	Post post=postRepository.findById(pid).get();
		return commentRepository.findAllByPost(post);
		
	}

}
