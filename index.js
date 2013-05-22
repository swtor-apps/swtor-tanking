var optimizer = require("bindings")("swtor_tanking_optimizer.node")
  , classData = {
      'shadow': {
        defenseAdd: 0.11 // 6% in tree, 5% naturally higher base %
      , defenseBonus: 0.05 //force breach debuff
      , shieldAdd: 0.15 //combat technique
      ,	shieldBonus: 0.20 //kinetic ward w/ 2-piece
      ,	absorbAdd: 0.04 //in tree
      ,	absorbBonus: 0.036 //average value from kinetic ward
      ,	drAddKE: 0.04 //in tree w/ 4-piece
      ,	drAddIE: 0.13 //in tree w/ 4-piece
      ,	drBonus: 0.05 //slow time
      ,	resistPct: 0.02 
      }
    , 'guardian': {
        defenseAdd: 0.03 //single saber mastery
      , defenseBonus: 0.10 //5% riposte, 5% dust storm
      , shieldAdd: 0.19 //15% soresu form, 4% in tree
      ,	shieldBonus: 0.0 //correct
      ,	absorbAdd: 0.0 //correct
      ,	absorbBonus: 0.0 //correct
      ,	drAddKE: 0.06 //soresu form
      ,	drAddIE: 0.11 //enure talent and soresu form
      ,	drBonus: 0.03 //guardian slash
      ,	resistPct: 0.00 // really?
      }
    , 'vanguard': {
        defenseAdd: 0.06 //4% in tree, 2% from 4-piece
      , defenseBonus: 0.075 //riot gas debuff
      , shieldAdd: 0.17 //ion cell and 2% in tree
      ,	shieldBonus: 0.0 //none
      ,	absorbAdd: 0.04 //in tree
      ,	absorbBonus: 0.15 //ability proc in tree
      ,	drAddKE: 0.02 //in tree
      ,	drAddIE: 0.02 //in tree
      ,	drBonus: 0.05 //static field
      ,	resistPct: 0.02
      }
    }
  //The following data is from http://www.swtor.com/community/showthread.php?t=616779
  , otherData = {
      dmgKE: 0.790044607 //defendable damage percent 
    , dmgIE: 0.209955393 //resistable damage percent
    , shieldLow: 0.364663353 //lower bound on shield as a percent of budget, based on arkanian
    , shieldHigh: 0.658429434 //upper bound on shield as a percent of budget, based on arkanian
    }
  ;
  
module.exports = {
  optimize: function (klass, statBudget, armor, callback){
    optimizer.optimize(otherData, classData[klass], statBudget, armor, 70, callback);
  }
, optimizer: optimizer
, classData: classData
, otherData: otherData
};
