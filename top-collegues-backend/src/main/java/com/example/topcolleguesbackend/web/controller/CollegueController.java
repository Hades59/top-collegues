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
import com.example.topcolleguesbackend.util.Avis;


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
	
	@RequestMapping(value="{nom}/score", method=RequestMethod.PUT)
	public Collegue MiseAjourScoreCollegue(@PathVariable String nom, @RequestBody Avis avis){
		Collegue colEnBase = repoCol.findByNom(nom);
		System.out.println("Bijour");
		System.out.println(avis);
		if(avis.getAvis().equals("jaime")){
			System.out.println("Bijour2");
			colEnBase.setScore(colEnBase.getScore()+10);
		}
		else if(avis.getAvis().equals("jedeteste")){
			System.out.println("Bijour3");
			colEnBase.setScore(colEnBase.getScore()-5);
		}
		return repoCol.save(colEnBase);
	}
}
