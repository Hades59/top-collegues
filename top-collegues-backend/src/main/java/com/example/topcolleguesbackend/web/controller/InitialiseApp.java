/**
 * 
 */
package com.example.topcolleguesbackend.web.controller;

import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.topcolleguesbackend.entity.Collegue;
import com.example.topcolleguesbackend.repository.CollegueRepository;

/**
 * @author ETY3
 *
 */

public class InitialiseApp {
	
	@Autowired
	private CollegueRepository repoCol;
	
	@PostConstruct
	public void initialiserCollaborateurs(){
		
		
	}
}
