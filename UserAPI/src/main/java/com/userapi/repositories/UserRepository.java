package com.userapi.repositories;

import com.userapi.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface UserRepository extends JpaRepository<User,Long> {

    public User findUserByMail(String mail);

}
