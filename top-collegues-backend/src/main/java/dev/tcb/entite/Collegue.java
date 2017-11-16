/**
 * 
 */
package dev.tcb.entite;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
	private Integer id;
	
	/** nom : String */
	private String nom;
	
	/** ImageUrl : String */
	private String ImageUrl;
	
	/** score : Integer */
	private Integer score;

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
		return ImageUrl;
	}

	/** Setter for ImageUrl
	 * @param imageUrl the imageUrl to set
	 */
	public void setImageUrl(String imageUrl) {
		this.ImageUrl = imageUrl;
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
