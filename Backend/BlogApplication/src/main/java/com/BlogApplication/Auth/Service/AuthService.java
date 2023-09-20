package com.BlogApplication.Auth.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.BlogApplication.Entity.User;
import com.BlogApplication.JWTSecurity.JwtProvider;
import com.BlogApplication.Repository.UserRepository;
import com.BlogApplication.UserLogin.DAO.UserDao;

@Service
public class AuthService {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AuthenticationManager authenticationManager;
		
//	private String encodePassword(String password) {
//		return passwordEncoder.encode(password);
//	}
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private JwtProvider jwtProvider;
		
		public loginResponse login(UserDao userDao) {
			
			Authentication authenticate= authenticationManager.authenticate(new
					UsernamePasswordAuthenticationToken(userDao.getUsername(), userDao.getPassword()));
			
			SecurityContextHolder.getContext().setAuthentication(authenticate);
			
			String authenticationToken= jwtProvider.generateToken(authenticate);
		    String username =	userDao.getUsername();
		    long id= userRepository.findByUserName(username).get().getId();
		    
			return new loginResponse(authenticationToken, username,id);
		}
	
		public Optional<org.springframework.security.core.userdetails.User> getCurrentUser() {
			org.springframework.security.core.userdetails.User principal= (org.springframework.
																			security.core.userdetails.User)
																							SecurityContextHolder
																							.getContext()
																							.getAuthentication()
																							.getPrincipal();
			return Optional.of(principal);
		}
	
	
}
	

