import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import cover from "../assets/cover.webp";

const Main = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <Box sx={{ textAlign: "start", margin: "80px" }}>
      <Typography variant="h4" sx={{ p: "60px" }}>
        Effective Buddhism
      </Typography>
      <Box sx={{ marginLeft: "59px" }}>
        <Typography variant="h5" sx={{ color: "rgb(217,116,13)" }}>
          Thesis:
        </Typography>
        <Typography variant="subtitle1">
          Buddhism is an amazing philosophy full of wisdom with great truths,
          however I believe Buddhists have lost the way of the Buddha and lack a
          real basis of impact. Effective Buddhism is a solution to those who
          seek to follow the Buddhist Path as Buddha Wanted. If Buddha was alive
          today, imagine the amount of change and impact he would be having.
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "59px" }}>
        <Typography variant="h5" sx={{ color: "rgb(217,116,13)", pt: "30px" }}>
          Evidence:
        </Typography>
        <Typography variant="subtitle1">
          In current Buddhist society, the top Buddhist role models have iron
          wills, but lack real ACTION or PURPOSE behind this because of a
          misinterpretation of Dharma. Buddha’s four main vows tell a different
          story of how the Buddha should act.
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "59px", m: "55px" }}>
        <Typography variant="subtitle1" sx={{ color: "red" }}>
          The Bodhisattva Vows exist in many different forms; they are chanted
          as follows:
        </Typography>
        <Typography variant="h5">
          1. Creations are numberless, I vow to free them.
        </Typography>
        <Typography variant="h5">
          2. Delusions are inexhaustible, I vow to transform them.
        </Typography>
        <Typography variant="h5">
          3. Reality is boundless, I vow to perceive it.
        </Typography>
        <Typography variant="h5">
          4. The awakened way is unsurpassable, I vow to embody it.
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "59px", m: "55px" }}>
        <Typography variant="subtitle1" sx={{ color: "red" }}>
          It’s also said in this way.
        </Typography>
        <Typography variant="h5">
          1. Living beings are limitless, I vow to liberate them all.
        </Typography>
        <Typography variant="h5">
          2. Blind passions are limitless, I vow to sever them all.
        </Typography>
        <Typography variant="h5">
          3. Dharma gates are inexhaustible, I vow to know them all.
        </Typography>
        <Typography variant="h5">
          4. Unsurpassed is awakening, I vow to realize it.
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "59px", m: "55px" }}>
        <Typography variant="subtitle1" sx={{ color: "red" }}>
          Or, in the most laymen terms:
        </Typography>
        <Typography variant="h5">1. To save all people</Typography>
        <Typography variant="h5">2. To renounce all worldly desires</Typography>
        <Typography variant="h5">3. To learn all teachings</Typography>
        <Typography variant="h5">4. To attain perfect enlightenment</Typography>
      </Box>
      <Typography variant="body2" sx={{ marginLeft: "55px" }}>
        If you go searching, there are many other ways these four vows are
        written, but they are all telling the same thing, in this order.
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginLeft: "55px", paddingTop: "45px" }}
      >
        As anyone may observe from the outside, the most influential people in
        the world today are not Buddhists. On top of that anyone from a
        Non-Buddhist city, will tell you that they have not heard from a
        Buddhist about why that path is best.
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginLeft: "55px", paddingTop: "45px" }}
      >
        It is a sickness is the Buddha communities today to ignore the first
        vow, and try to move on to 2,3, and 4. By the very means of the vows,
        step 2 cannot be done without first completing step 1. Step 1 is in
        fact, an earthly desire. The Four Main Vows are a harmonious right of
        passage that must be balanced in action towards their completion.
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginLeft: "55px", paddingTop: "45px" }}
      >
        Therefore, the way of the Buddha should be to renounce all worldly
        desires IN ORDER TO save all people, and to learn all teachings IN ORDER
        TO save all people, and that once these steps are completed perfect
        enlightenment will be attained. This means that these tasks are in
        harmony. As one renounces more wordy desires to spend more time saving
        people, one learns teachings to improve how they go about saving others,
        and rides the collective path towards enlightenment.
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginLeft: "55px", paddingTop: "45px" }}
      >
        However, instead of following this path and order, Buddhists today are
        known as people continually meditating. Struggling to awaken and
        renounce all worldly desires, and instead all acting to each other like
        they are farther along the path. I believe Buddhism has become a sick
        game of ineffective spiritual ego stroking.
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginLeft: "55px", paddingTop: "45px" }}
      >
        I am not saying that the Men and Women who have become great at
        meditating for hours and wholly living a minimalist life have not gone
        further down their path of enlightenment, instead that it is very sad
        that so much potential is moving towards the wrong place for the world
        to awaken and be saved. It is a fact these people who realize their
        potential to follow the first vow will be some of the strongest Buddhas
        there are.
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginLeft: "55px", paddingTop: "45px" }}
      >
        The funny thing about tech entrepreneurs who are rapidly changing the
        future, and Buddhism is that these tech entrepreneurs are slowly
        learning the way of the Buddha in order to optimize themselves. They are
        reaching new paths of enlightenment. Instead of referring to their
        actions as the Buddha way, they are learning the teachings of Buddha in
        order to be more effective.
      </Typography>
      <Typography sx={{ marginLeft: "55px", paddingTop: "45px", color: "red" }}>
        A few examples of parallel movements to the 10 precepts are:
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginLeft: "55px", paddingTop: "15px" }}
      >
        Not to engage in licentious acts or encourage others to do so. A monk is
        expected to abstain from sexual conduct entirely.
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginLeft: "55px", paddingTop: "15px" }}
      >
        Not to use false words and speech, or encourage others to do so.
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginLeft: "55px", paddingTop: "15px" }}
      >
        Not to trade or sell alcoholic beverages or encourage others to do so.
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginLeft: "55px", paddingTop: "15px" }}
      >
        Not to harbor anger or encourage others to be angry.
      </Typography>
      <Box sx={{ marginLeft: "25px", padding: "30px" }}>
        <Typography
          variant="body2"
          onClick={toggleContent}
          sx={{ color: "red" }}
        >
          Click This Toggle To Drop Down The Longer Form Versions Of These 10
          Preceptss
        </Typography>
        {showContent && (
          <div>
            <Typography sx={{ marginLeft: "55px", paddingTop: "15px" }}>
              1. A disciple of the Buddha shall not himself kill, encourage
              others to kill, kill by expedient means, praise killing, rejoice
              at witnessing killing, or kill through incantation or deviant
              mantras. He must not create the causes, conditions, methods, or
              karma of killing, and shall not intentionally kill any living
              creature. As a Buddha's disciple, he ought to nurture a mind of
              compassion and filial piety, always devising expedient means to
              rescue and protect all beings. If instead, he fails to restrain
              himself and kills sentient beings without mercy, he commits a
              Parajika (major) offense.
            </Typography>
            <Typography sx={{ marginLeft: "55px", paddingTop: "15px" }}>
              2. A disciple of the Buddha must not himself steal or encourage
              others to steal, steal by expedient means, steal by means of
              incantation or deviant mantras. He should not create the causes,
              conditions, methods, or karma of stealing. No valuables or
              possessions, even those belonging to ghosts and spirits or thieves
              and robbers, be they as small as a needle or blade of grass, may
              be stolen. As a Buddha's disciple, he ought to have a mind of
              mercy, compassion, and filial piety -- always helping people earn
              merits and achieve happiness. If instead, he steals the
              possessions of others, he commits a Parajika offense.
            </Typography>
            <Typography sx={{ marginLeft: "55px", paddingTop: "15px" }}>
              3.A disciple of the Buddha must not engage in licentious acts or
              encourage others to do so. [As a monk] he should not have sexual
              relations with any female -- be she a human, animal, deity or
              spirit -- nor create the causes, conditions, methods, or karma of
              such misconduct. Indeed, he must not engage in improper sexual
              conduct with anyone. A Buddha's disciple ought to have a mind of
              filial piety -- rescuing all sentient beings and instructing them
              in the Dharma of purity and chastity. If instead, he lacks
              compassion and encourages others to engage in sexual relations
              promiscuously, including with animals and even their mothers,
              daughters, sisters, or other close relatives, he commits a
              Parajika offense.
            </Typography>
            <Typography sx={{ marginLeft: "55px", paddingTop: "15px" }}>
              4.A disciple of the Buddha must not himself use false words and
              speech, or encourage others to lie or lie by expedient means. He
              should not involve himself in the causes, conditions, methods, or
              karma of lying, saying that he has seen what he has not seen or
              vice versa, or lying implicitly through physical or mental means.
              As a Buddha's disciple, he ought to maintain Right Speech and
              Right Views always, and lead all others to maintain them as well.
              If instead, he causes wrong speech, wrong views or evil karma in
              others, he commits a Parajika offense.
            </Typography>
            <Typography sx={{ marginLeft: "55px", paddingTop: "15px" }}>
              5. A disciple of the Buddha must not trade in alcoholic beverages
              or encourage others to do so. He should not create the causes,
              conditions, methods, or karma of selling any intoxicant
              whatsoever, for intoxicants are the causes and conditions of all
              kinds of offenses. As a Buddha's disciple, he ought to help all
              sentient beings achieve clear wisdom. If instead, he causes them
              to have upside-down, topsy-turvy thinking, he commits a Parajika
              offense.
            </Typography>
            <Typography sx={{ marginLeft: "55px", paddingTop: "15px" }}>
              6.A disciple of the Buddha must not himself broadcast the misdeeds
              or infractions of Bodhisattva-clerics or Bodhisattva-laypersons,
              or of [ordinary] monks and nuns -- nor encourage others to do so.
              He must not create the causes, conditions, methods, or karma of
              discussing the offenses of the assembly. As a Buddha's disciple,
              whenever he hears evil persons, externalists or followers of the
              Two Vehicles speak of practices contrary to the Dharma or contrary
              to the precepts within the Buddhist community, he should instruct
              them with a compassionate mind and lead them to develop wholesome
              faith in the Mahayana. If instead, he discusses the faults and
              misdeeds that occur within the assembly, he commits a Parajika
              offense.
            </Typography>
            <Typography sx={{ marginLeft: "55px", paddingTop: "15px" }}>
              7.A disciple of the Buddha shall not praise himself and speak ill
              of others, or encourage others to do so. He must not create the
              causes, conditions, methods, or karma of praising himself and
              disparaging others. As a disciple of the Buddha, he should be
              willing to stand in for all sentient beings and endure humiliation
              and slander -- accepting blame and letting sentient beings have
              all the glory. If instead, he displays his own virtues and
              conceals the good points of others, thus causing them to suffer
              slander, he commits a Parajika offense.
            </Typography>
            <Typography sx={{ marginLeft: "55px", paddingTop: "15px" }}>
              7. A disciple of the Buddha must not be stingy or encourage others
              to be stingy. He should not create the causes, conditions,
              methods, or karma of stinginess. As a Bodhisattva, whenever a
              destitute person comes for help, he should give that person what
              he needs. If instead, out of anger and resentment, he denies all
              assistance -- refusing to help with even a penny, a needle, a
              blade of grass, even a single sentence or verse or a phrase of
              Dharma, but instead scolds and abuses that person -- he commits a
              Parajika offense.
            </Typography>
            <Typography sx={{ marginLeft: "55px", paddingTop: "15px" }}>
              9. A disciple of the Buddha shall not harbor anger or encourage
              others to be angry. He should not create the causes, conditions,
              methods, or karma of anger. As a disciple of the Buddha, he ought
              to be compassionate and filial, helping all sentient beings
              develop the good roots of non-contention. If instead, he insults
              and abuses sentient beings, or even transformation beings [such as
              deities and spirits], with harsh words, hitting them with his
              fists or feet, or attacking them with a knife or club -- or
              harbors grudges even when the victim confesses his mistakes and
              humbly seeks forgiveness in a soft, conciliatory voice -- the
              disciple commits a Parajika offense.
            </Typography>
            <Typography sx={{ marginLeft: "55px", paddingTop: "15px" }}>
              10. A Buddha's disciple shall not himself speak ill of the Triple
              Jewel or encourage others to do so. He must not create the causes,
              conditions, methods or karma of slander. If a disciple hears but a
              single word of slander against the Buddha from externalists or
              evil beings, he experiences a pain similar to that of three
              hundred spears piercing his heart. How then could he possibly
              slander the Triple Jewel himself? Hence, if a disciple lacks faith
              and filial piety towards the Triple Jewel, and even assists evil
              persons or those of aberrant views to slander the Triple Jewel, he
              commits a Parajika offense.
            </Typography>
          </div>
        )}
      </Box>
      <Box sx={{ marginLeft: "59px" }}>
        <Typography variant="h5" sx={{ color: "rgb(217,116,13)" }}>
          Reiterating The Message:
        </Typography>
        <Typography sx={{ mt: "15px" }}>
          Many buddhists today practice the seeking of enlightenment rather than
          practicing the way of Buddha himself. Buddha was an enlightened being
          who spread his philosophy far and wide, preaching and changing and
          influencing the world and his actions live on to this day.{" "}
        </Typography>
        <Typography sx={{ mt: "40px" }}>
          Buddhists in most countries are seen as people who simply meditate.
          The idea is to relinquish attachment to earthly desires in order to DO
          MORE. Not to meditate all day to do nothing. In an effort of learning
          all teachings, we will re-evaluate the core values, and give a new
          perspective based on the teachings. The core re-evaluation leads us to
          the idea that Nirvana is something to achieve in this realm. And that
          leaving this realm is a negative desire in it of itself.
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "59px", mt: "40px" }}>
        <Typography sx={{ color: "rgb(217,116,13)" }}>
          Let’s break them down.
        </Typography>
        <Typography sx={{ mt: "20px", ml: "10px" }}>
          1. To save all people: this is by far the biggest vow that is failed
          to be recognized by modern Buddhist society. Outreach is a non-factor.
          So many people who need this valuable information are left in the
          dark, with no outreach from Buddhists. Actual progress using
          technology (tools to increase impact) are completely disregarded.
        </Typography>
        <Typography sx={{ mt: "20px", ml: "10px" }}>
          2. Many people have regarded this initial vow as meaning to renounce.
          But here’s what the true text says “Desires for tangible things (such
          as wealth, property, or other material goods) or for pleasures of the
          body (such as sexual activity, gluttony, or other hedonistic
          pursuits). Buddhism teaches us to try to let go of our worldly
          desires, freeing our minds and bodies for a state of enlightenment.”As
          it says, freeing our minds and bodies for a state of enlightenment.
        </Typography>
        <Typography sx={{ mt: "20px", ml: "10px" }}>
          3. Learning all teachings requires knowing all things, we do not even
          know how consciousness works yet. To learn all teachings, we need to
          learn by the act of doing. There is no better thing to learn at this
          time, than how to spread change like Buddha did.
        </Typography>
        <Typography sx={{ mt: "20px", ml: "10px" }}>
          4. “In Buddhism, enlightenment (called bodhi in Indian Buddhism, or
          satori in Zen Buddhism) is when a Buddhist finds the truth about life
          and stops being reborn because they have reached Nirvana.” In order to
          stop the cycle of rebirth, we must stop the death to life cycle. With
          infinite time our particles are always brought back to a conscious
          form. Until we find a conscious form to reach Nirvana in, we will
          repeat the cycle. “Rebirth in Buddhism refers to its teaching that the
          actions of a person lead to a new existence after death, in an endless
          cycle called saṃsāra.[1][2] This cycle is considered to be dukkha,
          unsatisfactory and painful. The cycle stops only if liberation is
          achieved by insight and the extinguishing of craving.
        </Typography>
      </Box>
      <Divider sx={{ pt: "30px", ml: "45px" }} />
      <Box sx={{ ml: "100px", p: "10px" }}>
        <img src={cover} alt="cover" />
      </Box>
    </Box>
  );
};

export default Main;
