package com.example.topcolleguesbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author ETY3
 *
 */
@Entity
@Table(name = "collegue")
public class Collegue {
	
	/** id : Integer */
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonIgnore
	private Integer id;
	
	/** nom : String */
	@JsonProperty("_nom")
	private String nom;
	
	/** ImageUrl : String */
	@JsonProperty("_urlImage")
	private String imageUrl;
	
	/** score : Integer */
	@JsonProperty("_score")
	private Integer score;
	
	public Collegue() {
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param nom
	 * @param imageUrl
	 * @param score
	 */
	public Collegue(String nom, String imageUrl, Integer score) {
		super();
		this.nom = nom;
		this.imageUrl = imageUrl;
		this.score = score;
	}

	/** Getter for id
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}

	/** Setter for id
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/** Getter for nom
	 * @return the nom
	 */
	public String getNom() {
		return nom;
	}

	/** Setter for nom
	 * @param nom the nom to set
	 */
	public void setNom(String nom) {
		this.nom = nom;
	}

	/** Getter for ImageUrl
	 * @return the imageUrl
	 */
	public String getImageUrl() {
		return imageUrl;
	}

	/** Setter for ImageUrl
	 * @param imageUrl the imageUrl to set
	 */
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	/** Getter for score
	 * @return the score
	 */
	public Integer getScore() {
		return score;
	}

	/** Setter for score
	 * @param score the score to set
	 */
	public void setScore(Integer score) {
		this.score = score;
	}
}
