import { _decorator, Component, Node } from 'cc';
import { em } from '../../global/EventManager';
import { Boss } from './Boss';
const { ccclass, property } = _decorator;

@ccclass('Boss12')
export class Boss12 extends Boss {
    _skillData = {
        "normalParticle": {
            "name": "normalParticle",
            "damage": 20000,
            "duration": 3,
            "moveSpeed": 500,
            "canAttackTimes":1,
        },
    };

    onLoad() {
        let bossData = em.dispatch("usingHeroBasePropertyFun","getBossDataById",12);
        bossData.canMove = true;
        this._skillData.normalParticle.damage = bossData.normalDamage;
        this.initBossInfo(bossData);
        this.setBossStrategy();
    }
    setBossStrategy() {
        this.schedule(()=>{
            this.usingNormalParticleTriShot([[0, 0], [-160, 0], [160, 0]],0.5);
        }, 1);
    }
}

