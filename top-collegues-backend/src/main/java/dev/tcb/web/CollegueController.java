package dev.tcb.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.tcb.entite.Collegue;
import dev.tcb.repository.CollegueRepository;

//RestController combine ResponseBody et Controller
@RestController
@RequestMapping("/collegues")
public class CollegueController {
	
	@Autowired private CollegueRepository repoCol;

	@RequestMapping(method = RequestMethod.GET)
	public List<Collegue> ListerCollegues(){
		return repoCol.findAll();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public List<Collegue> SauvegarderCollegue(){
		return null;
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public List<Collegue> MiseAjourScoreCollegue(){
		return null;
	}
}
