import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {
  modo: number = 0;
  contRodada: number = 0;
  tabuleiro: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  vitoria: boolean = false;
  escolhaMaquina: number = 10;

  ngOnInit(): void { }

  jogo(escolha: number) {
    switch (this.modo) {
      case 0:
        this.multiplayer(escolha);
        break;
      case 1:
        this.modoFacil(escolha);
        break;
      case 2:
        this.modoMedio(escolha);
        break;
      case 3:
        this.modoDificil(escolha);
        break;
    }
  }

  multiplayer(escolha: number) {
    const celula = document.getElementById(`${escolha}`);
    const rodadaElement = document.getElementById("rodada");
    const textoJogo = document.getElementById("textoJogo");

    if (celula != null && celula.innerHTML == "") {
      if (this.contRodada % 2 == 0) {
        celula.innerHTML = "x";
        this.tabuleiro[escolha] = "x";
        if (textoJogo) {
          textoJogo.innerHTML = "Vez de o";
        }
      } else {
        celula.innerHTML = "o";
        this.tabuleiro[escolha] = "o";
        if (textoJogo) {
          textoJogo.innerHTML = "Vez de x";
        }
      }
      this.contRodada++;
      this.checarVitoria();
    }
    if (rodadaElement) {
      rodadaElement.innerHTML = ("Rodada: " + (this.contRodada).toString());
    }

  }

  modoFacil(escolha: number) {
    const celula = document.getElementById(`${escolha}`);
    const rodadaElement = document.getElementById("rodada");
    const textoJogo = document.getElementById("textoJogo");
    let randomChoice: number;

    if (celula && celula.innerHTML == "") {
      if (this.contRodada % 2 == 0) {
        celula.innerHTML = "x";
        this.tabuleiro[escolha] = "x";
        if (textoJogo) {
          textoJogo.innerHTML = "Vez de o";
        }
        this.contRodada++;
        this.checarVitoria();

        if ((!this.vitoria) && (this.contRodada < 9)) {
          do {
            randomChoice = Math.floor(Math.random() * 9);
          } while ((this.tabuleiro[randomChoice] == "o") || (this.tabuleiro[randomChoice] == "x"));
          const randomChoiceElement = document.getElementById(randomChoice.toString());
          if (randomChoiceElement) {
            randomChoiceElement.innerHTML = "o";
          }
          this.tabuleiro[randomChoice] = "o";
          this.contRodada++;
          this.checarVitoria();
        }

      }
    }


    if (rodadaElement != null) {
      rodadaElement.innerHTML = ("Rodada: " + (this.contRodada).toString());
    }
  }

  modoMedio(escolha: number) {
    const celula = document.getElementById(`${escolha}`);
    const rodadaElement = document.getElementById("rodada");
    const textoJogo = document.getElementById("textoJogo");
    let randomChoice: number;

    if (celula && celula.innerHTML == "") {
      if (this.contRodada % 2 == 0) {
        celula.innerHTML = "x";
        this.tabuleiro[escolha] = "x";
        if (textoJogo) {
          textoJogo.innerHTML = "Vez de o";
        }
        this.contRodada++;
        this.checarVitoria();

        if ((!this.vitoria) && (this.contRodada < 9)) {
          if (this.ganhando()) {
            const escolhaMaquinaElement = document.getElementById(this.escolhaMaquina.toString());
            if (escolhaMaquinaElement) {
              escolhaMaquinaElement.innerHTML = "o";
              this.tabuleiro[this.escolhaMaquina] = "o"
              this.contRodada++;
            }
            this.checarVitoria();
          }
          else {

            if ((!this.vitoria) && (this.contRodada < 9)) {
              do {
                randomChoice = Math.floor(Math.random() * 9);
              } while ((this.tabuleiro[randomChoice] == "o") || (this.tabuleiro[randomChoice] == "x"));
              const randomChoiceElement = document.getElementById(randomChoice.toString());
              if (randomChoiceElement) {
                randomChoiceElement.innerHTML = "o";
              }
              this.tabuleiro[randomChoice] = "o";
              this.contRodada++;
              this.checarVitoria();
            }
          }
        }


      }
    }
  }

  modoDificil(escolha: number) {
    // Implementation of the modoDificil function
  }

  ganhando(): boolean {
    let tabuleiroTemp: String[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    let result: boolean = false;
    for (let cont: number = 0; cont < 9; cont++) {
      tabuleiroTemp[cont] = this.tabuleiro[cont];
    }
    for (let cont: number = 0; cont < 9; cont++) {
      {
        if (!(tabuleiroTemp[cont] == "x" || tabuleiroTemp[cont] == "o")) {
          tabuleiroTemp[cont] = "o";
          if (this.preverVitoria(tabuleiroTemp) && !result) {
            this.escolhaMaquina = cont;
            result = true;
          }
          tabuleiroTemp[cont] = cont.toString();
        }
      }
    }
    return result;
  }

  preverVitoria(tabuleiroTemp: String[]): boolean {
    if (
      (tabuleiroTemp[0] === tabuleiroTemp[1] && tabuleiroTemp[1] === tabuleiroTemp[2]) ||
      (tabuleiroTemp[3] === tabuleiroTemp[4] && tabuleiroTemp[4] === tabuleiroTemp[5]) ||
      (tabuleiroTemp[6] === tabuleiroTemp[7] && tabuleiroTemp[7] === tabuleiroTemp[8]) ||
      (tabuleiroTemp[0] === tabuleiroTemp[3] && tabuleiroTemp[3] === tabuleiroTemp[6]) ||
      (tabuleiroTemp[1] === tabuleiroTemp[4] && tabuleiroTemp[4] === tabuleiroTemp[7]) ||
      (tabuleiroTemp[2] === tabuleiroTemp[5] && tabuleiroTemp[5] === tabuleiroTemp[8]) ||
      (tabuleiroTemp[0] === tabuleiroTemp[4] && tabuleiroTemp[4] === tabuleiroTemp[8]) ||
      (tabuleiroTemp[2] === tabuleiroTemp[4] && tabuleiroTemp[4] === tabuleiroTemp[6])
    ) {
      return true;
    } else {
      return false;
    }
  }

  checarVitoria() {
    const element0 = document.getElementById("0");
    const element1 = document.getElementById("1");
    const element2 = document.getElementById("2");
    const element3 = document.getElementById("3");
    const element4 = document.getElementById("4");
    const element5 = document.getElementById("5");
    const element6 = document.getElementById("6");
    const element7 = document.getElementById("7");
    const element8 = document.getElementById("8");

    const rodadaElement = document.getElementById("rodada");
    const textoJogo = document.getElementById("textoJogo");
    const tabuleiro = document.getElementById("tabuleiro");

    if (element0 && element1 && element2 && element3 && element4 && element5 && element6 && element7 && element8 && textoJogo && rodadaElement && tabuleiro) {
      if (this.tabuleiro[0] == this.tabuleiro[1] && this.tabuleiro[1] == this.tabuleiro[2]) {
        element0.style.color = "#CC0F2F";
        element1.style.color = "#CC0F2F";
        element2.style.color = "#CC0F2F";
        this.vitoria = true;
      }

      if (this.tabuleiro[3] == this.tabuleiro[4] && this.tabuleiro[4] == this.tabuleiro[5]) {
        element3.style.color = "#CC0F2F";
        element4.style.color = "#CC0F2F";
        element5.style.color = "#CC0F2F";
        this.vitoria = true;
      }

      if (this.tabuleiro[6] == this.tabuleiro[7] && this.tabuleiro[7] == this.tabuleiro[8]) {
        element6.style.color = "#CC0F2F";
        element7.style.color = "#CC0F2F";
        element8.style.color = "#CC0F2F";
        this.vitoria = true;
      }

      if (this.tabuleiro[0] == this.tabuleiro[3] && this.tabuleiro[3] == this.tabuleiro[6]) {
        element0.style.color = "#CC0F2F";
        element3.style.color = "#CC0F2F";
        element6.style.color = "#CC0F2F";
        this.vitoria = true;
      }

      if (this.tabuleiro[1] == this.tabuleiro[4] && this.tabuleiro[4] == this.tabuleiro[7]) {
        element1.style.color = "#CC0F2F";
        element4.style.color = "#CC0F2F";
        element7.style.color = "#CC0F2F";
        this.vitoria = true;
      }

      if (this.tabuleiro[2] == this.tabuleiro[5] && this.tabuleiro[5] == this.tabuleiro[8]) {
        element2.style.color = "#CC0F2F";
        element5.style.color = "#CC0F2F";
        element8.style.color = "#CC0F2F";
        this.vitoria = true;
      }

      if (this.tabuleiro[0] == this.tabuleiro[4] && this.tabuleiro[4] == this.tabuleiro[8]) {
        element0.style.color = "#CC0F2F";
        element4.style.color = "#CC0F2F";
        element8.style.color = "#CC0F2F";
        this.vitoria = true;
      }

      if (this.tabuleiro[2] == this.tabuleiro[4] && this.tabuleiro[4] == this.tabuleiro[6]) {
        element2.style.color = "#CC0F2F";
        element4.style.color = "#CC0F2F";
        element6.style.color = "#CC0F2F";
        this.vitoria = true;
      }

      if (this.vitoria) {
        if (this.contRodada % 2 == 1) {
          textoJogo.innerHTML = "X é o ganhador!";
        } else {
          textoJogo.innerHTML = "O é o ganhador!";
        }
        tabuleiro.style.pointerEvents = "none";
      } else if (this.contRodada > 8) {
        textoJogo.innerHTML = "Deu velha!";
        tabuleiro.style.pointerEvents = "none";
      }
    }
  }

  trocarModo() {
    const modoElement = document.getElementById("modo");
    if (modoElement) {
      switch (this.modo) {
        case 0:
          this.limpar()
          this.modo = 1;
          modoElement.innerHTML = "Modo: fácil";
          break;
        case 1:
          this.limpar()
          this.modo = 2;
          modoElement.innerHTML = "Modo: médio";
          break;
        case 2:
          this.limpar()
          this.modo = 3;
          modoElement.innerHTML = "Modo: Difícil";
          break;
        case 3:
          this.limpar()
          this.modo = 0;
          modoElement.innerHTML = "Modo: multiplayer";
          break;
      }
    }
  }

  limpar() {
    this.vitoria = false;
    this.contRodada = 0;

    const tabuleiro = document.getElementById("tabuleiro");
    const textoJogo = document.getElementById("textoJogo");
    const rodada = document.getElementById("rodada");
    if (tabuleiro && textoJogo && rodada) {
      tabuleiro.style.pointerEvents = "all";
      textoJogo.innerHTML = "Vez de x";
      rodada.innerHTML = ("Rodada: " + this.contRodada);
    }
    for (let cont = 0; cont < 9; cont++) {
      this.tabuleiro[cont] = cont.toString();
      const celula = document.getElementById(`${cont}`);
      if (celula) {
        celula.style.color = "#000F55";
        //todo: consertar cor dps :)
        celula.innerHTML = "";
      }
    }
  }
}