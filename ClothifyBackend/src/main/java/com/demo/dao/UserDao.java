package com.demo.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
    @Query(value="select * from user  where username=:name and password=:pass",nativeQuery = true)
	User findByUsername(String name,String pass);
    
    @Query(value="select * from user  where username=:username and email=:email",nativeQuery = true)
   	User check(String username, String email);
    
    @Query(value="select * from user  where password=:password ",nativeQuery = true)
    User fetchByPass(String password);
    
    @Modifying
    @Transactional
    @Query(value="update user  set password=:pass where uid=:i",nativeQuery = true)
	int updatePass(String pass, int i);
     
    @Query(value=" select u.uid,username,name,email,phone_no,address,oid,no_of_items,pickup_date ,pickup_description from user u  join pickuporder p where u.uid=p.uid",nativeQuery = true)
	List<Object> getOrders();
    @Query(value="select * from user  where username=:username ",nativeQuery = true)
	User getUser(String username);
	
   



}
