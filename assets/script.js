var Suzaku = {
        // Suzaku's stats
        "HP" : 100,
        "attack" : 8,
        "counter-attack": 12,

        // Suzaku damage alert
        suzakuHurt : function () {
          this.HP = this.HP - x;
          alert("Suzaku takes " x "dmg, he now has " + this.HP + " HP left!");
        },

        // Suzaku defeat alert
        suzakuDead : function() {
          this.HP = this.HP * 0;
          alert("Suzaku's HP has reached " + this.HP + "!");
          alert("You've killed Suzaku");
        }

      };

var Byakko = {
        // Byakko's stats
        "HP" : 135,
        "attack" : 12,
        "counter-attack": 16,

        // Byakko damage alert
        byakkoHurt : function () {
          this.HP = this.HP - ;
          alert("Illidan takes 100dmg, he now has " + this.HP + " HP left!");
        },

        // Byakko defeat alert
        byakkoDead : function() {
          this.HP = this.HP * 0;
          alert("Byakko's HP has reached " + this.HP + "!");
          alert("You've killed Byakko!");
        }

      };