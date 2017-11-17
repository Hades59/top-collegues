package com.example.topcolleguesbackend.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.topcolleguesbackend.entity.Collegue;
import com.example.topcolleguesbackend.repository.CollegueRepository;


//RestController combine ResponseBody et Controller
@RestController
@RequestMapping("/collegues")
@CrossOrigin(origins="*")
public class CollegueController {
	
	@Autowired private CollegueRepository repoCol;

	@GetMapping
	public List<Collegue> listerCollegues(){
		return repoCol.findAll();
	}
	
	@PostMapping
	public List<Collegue> SauvegarderCollegue(@RequestBody Collegue newCollegue){
		repoCol.save(newCollegue);
		return repoCol.findAll();
	}
	
	@PutMapping
	public Collegue MiseAjourScoreCollegue(@PathVariable String nom, @PathVariable Integer score){
		Collegue colEnBase = repoCol.findByNom(nom);
		colEnBase.setScore(score);
		return repoCol.save(colEnBase);
	}
}
