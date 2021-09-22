/**
 * @file Должен быть совместим с бэкэндом и фронтэндом.
 */

"use strict";
const EXP_LEVEL_BASE = 10;

/**
 * Количество опыта, даваемого ученику за выполнение квеста уровня post.level после аппрува
 * @param {Integer} level
 * @returns {Integer}
 */
function experiencePupilPerQuest(level) {
  return level * EXP_LEVEL_BASE;
}

/**
 * Количество опыта, даваемого создателю квеста уровня userlink.level после аппрува
 * @param {Integer} level
 * @returns {Integer}
 */
function experienceCreatorPerQuest(level) {
  return level * EXP_LEVEL_BASE * 0.5;
}

/**
 * Количество опыта, даваемого рецензенту за досмотр выполненного квеста уровня post.level
 * @param {Integer} level
 * @returns {Integer}
 */
function experienceReviewerPerQuest(level) {
  return level * EXP_LEVEL_BASE * 0.1;
}

/**
 * Количество опыта, нужного для перехода с уровня level
 * @param {Integer} level
 * @returns {Integer}
 */
function totalExperienceForLevel(level) {
  return (level + 1) * experiencePupilPerQuest(level);
}

/**
 * Правила прибавления опыта.<br>
 * Не может перенести выше чем на +1 уровень (обнулит излишек опыта).
 * @param {Integer} level
 * @param {Integer} expierenceTotal
 * @param {Integer} expierenceAdditional
 */
function recalcExpierence(level, expierenceTotal, expierenceAdditional) {
  let new_level = level;
  let expierence_modulo = expierenceTotal + expierenceAdditional;
  let total_exp_for_current_level = totalExperienceForLevel(level);
  if (expierence_modulo >= total_exp_for_current_level) {
    new_level = level + 1;
    expierence_modulo = expierence_modulo - total_exp_for_current_level;
    let total_exp_for_next_level = totalExperienceForLevel(new_level);
    if (expierence_modulo >= total_exp_for_next_level) {
      expierence_modulo = total_exp_for_next_level - 1;
    }
  }

  return { new_level, expierence_modulo };
}

module.exports = {
  experiencePupilPerQuest,
  experienceReviewerPerQuest,
  experienceCreatorPerQuest,
  totalExperienceForLevel,
  recalcExpierence,
};
