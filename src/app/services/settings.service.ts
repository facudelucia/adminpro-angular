import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector("#theme")
  constructor() { 
    const theme = localStorage.getItem("theme")
    if(theme){
      this.linkTheme.setAttribute("href", theme)
    }else{
      this.linkTheme.setAttribute("href", "./assets/css/colors/purple-dark.css")
    }
  }

  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`
    this.linkTheme.setAttribute("href", url)
    localStorage.setItem("theme", url)
    this.checkCurrentTheme()
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll(".selector")
    links.forEach(link=>{
      link.classList.remove("working")
      const btnTheme = link.getAttribute("data-theme")
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme.getAttribute("href")
      if(btnThemeUrl === currentTheme){
        link.classList.add("working")
      }
    })
  }
  
}
