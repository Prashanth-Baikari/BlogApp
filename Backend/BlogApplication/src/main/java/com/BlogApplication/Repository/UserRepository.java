package com.BlogApplication.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BlogApplication.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByUserName(String username);

	Long findIdByUserName(String username);

//	Optional<User> findIdByUserName(String username);
	
	

}
