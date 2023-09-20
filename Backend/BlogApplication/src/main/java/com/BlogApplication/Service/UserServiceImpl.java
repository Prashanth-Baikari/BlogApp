package com.BlogApplication.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BlogApplication.Entity.User;
import com.BlogApplication.Repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}

	public Long findIdByUserName(User user) {
		return userRepository.findByUserName(user.getUserName()).get().getId();
		
	}
	
//	@Autowired
//	private PasswordEncoder passwordEncoder;

}
