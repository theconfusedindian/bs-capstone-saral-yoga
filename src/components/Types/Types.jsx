// import of trunket
import Truncate from "react-truncate";

// import {useState}
import { useState } from "react";

import surya from "../../assets/images/surya-namaskara.jpeg";

import "./Types.scss";

export default function Types() {
  return (
    <div className="types-page">
      <h3 className="types-page__title">
        Learn about different types of Yoga practice
      </h3>

      <article className="types-page__intro">
        <p>
          “Plain and simple, yoga is the union between the body, mind, and
          spirit. That’s the origins of yoga and that’s how it is practiced in
          the East,” says Miriam Amselem, yogi of nearly 30 years. “It is a
          place of discovery and connection with your own body that encompasses
          balance, proper stretching techniques, breathing, meditation,
          centering the mind and spirit — that’s yoga in its real form.”
        </p>
        <p>
          Yoga ignores the “no pain, no gain” philosophy that’s rife in fitness
          communities. Yoga is not a place to push through, go beyond your edge,
          or ignore your body. The primary tenet is ahimsa, or non-harming, and
          that starts with choosing the right type of yoga for you.
        </p>
      </article>
      <div className="types-page__type">
        <div className="types-page__type--card1">
          <h3>Surya Namaskara</h3>
          <img src={surya} alt="surya-namaskara-image" />
          <p>
            Surya Namaskar(a) (Sanskrit: सूर्यनमस्कार, romanized:
            Sūryanamaskāra), also called Sun Salutation or Salute to the Sun, is
            a practice in yoga as exercise incorporating a flow sequence of some
            twelve gracefully linked asanas. The asana sequence was first
            recorded as yoga in the early 20th century, though similar exercises
            were in use in India before that, for example among wrestlers.
          </p>
          <p>
            The basic sequence involves moving from a standing position into
            Downward and Upward Dog poses and then back to the standing
            position, but many variations are possible. The set of 12 asanas is
            dedicated to the Hindu solar deity, Surya. In some Indian
            traditions, the positions are each associated with a different
            mantra.
          </p>
        </div>
        <div className="types-page__type--card2">
          <h3>Pranayama</h3>
          <p>Hello World</p>
        </div>
      </div>
      <div className="types-page__type--card1">
        <h3>Kundalini Yoga</h3>
        <p>
          “Kundalini” in Sanskrit translates to “life force energy” (known as
          prana or chi in the yoga community), which is thought to be tightly
          coiled at the base of the spine. These yoga sequences are carefully
          designed to stimulate or unlock this energy and to reduce stress and
          negative thinking.
        </p>
        <p>
          This is accomplished by challenging both mind and body with chanting,
          singing, meditation, and kriyas (specific series of poses paired with
          breath work and chanting).
        </p>
        <p>
          Typically, a kundalini class starts with a mantra (a focus for the
          class), then includes breathing exercises, warmups to get the body
          moving, increasingly more challenging poses, and a final relaxation
          and meditation
        </p>
        <h3>Who Might Like It:</h3>
        <p>
          Anyone in search of a physical, yet also spiritual practice, or those
          who like singing or chanting.
        </p>
      </div>
      <div className="types-page__type--card2">
        <h3>Vinyasa Yoga</h3>
        <p>
          Vinyasa yoga is also called “flow yoga” or “vinyasa flow”, is an
          incredibly common style. It was adapted from the more regimented
          ashtanga practice a couple of decades ago. The word “vinyasa”
          translates to “place in a special way,” which is often interpreted as
          linking breath and movement.
        </p>
        <h3>Who Might Like It:</h3>
        <p>
          Anyone who wants more movement and less stillness from their yoga
          practice.
        </p>
      </div>
      <div className="types-page__type--card1">
        <h3>Hatha Yoga</h3>
        <p>
          Hatha yoga derives its name from the Sanskrit words for sun and moon,
          and it’s designed to balance opposing forces. The balance in hatha
          yoga might come from strength and flexibility, physical and mental
          energy, or breath and the body.
        </p>
        <p>
          It’s often used as a catch-all term for the physical side of yoga, is
          more traditional in nature, or is billed as yoga for beginners. “Hatha
          translates to ‘forceful,’ but this relates more to the aspect of
          concentration and regularity of practice rather than applying
          unnecessary force to the body.
        </p>
        <p>
          To be considered hatha, classes must include a mix of asana (poses),
          pranayama (breathing exercises), and meditation
        </p>
        <h3>Who Might Like It:</h3>
        <p>
          Anyone looking for a balanced practice, or those in search of a
          gentler type of yoga.
        </p>
      </div>
      <div className="types-page__type--card2">
        <h3>Ashtanga Yoga</h3>
        <p>
          Ashtanga yoga consists of six series of specific poses taught in
          order. Each pose and each series is “given” to a student when their
          teacher decides they have mastered the previous one. This is a very
          physical, flow-style yoga with spiritual components. Ashtanga teachers
          give hands-on adjustments, and in Mysore-style studios (named after
          the city where the practice’s guru, Sri K. Pattabhi Jois, lived and
          taught), each student has a unique practice.
        </p>
        <p>
          Ashtanga vinyasa yoga is often taught as “led” classes in the West,
          where the first or second series is taught from start to finish over
          the course of 90 minutes to two hours. Ideally, there is no music
          played in ashtanga classes.
        </p>
        <h3>Who Might Like It:</h3>
        <p>
          Anyone who likes routine or a more physical yet spiritual practice.
        </p>
      </div>
      <div className="types-page__type--card1">
        <h3>Yin Yoga</h3>
        <p>
          Yin yoga is a slower style of yoga in which poses are held for a
          minute and eventually up to five minutes or more. It is a type of yoga
          with roots in martial arts as well as yoga, and it’s designed to
          increase circulation in the joints and improve flexibility. The
          practice focuses on the hips, lower back, and thighs and uses props
          like bolsters, blankets, and blocks to let gravity do the work,
          helping to relax. While other forms of yoga focus on the major muscle
          groups, yin yoga targets the body’s connective tissues.
        </p>
        <p>
          Yin also aids recovery from hard workouts. “Adding a deep stretch and
          holding class like yin can be extremely beneficial to a strong body,”
          says Megan Kearney, a Yoga Medicine instructor. Holding poses longer
          benefits the mind as well as the body, providing a chance to practice
          being still. “This is a beautiful practice that honors stillness,”
          says Moore-Tucker. “This style of practice is a great balance for
          vinyasa flow.”
        </p>
        <h3>Who Might Like It:</h3>
        <p>
          Those who need to stretch out after a tough workout, or anyone
          interested in a slower-paced practice.
        </p>
      </div>
      <div className="types-page__type--card2">
        <h3>Power Yoga</h3>
        <p>
          Like vinyasa yoga, power yoga traces its roots to ashtanga but is less
          regimented and is more open to interpretation by individual teachers.
          Power yoga is generally more active and is done at a quicker pace than
          other styles of yoga. Power yoga strengthens the muscles while also
          increasing flexibility. The variation of sequences keeps the brain
          engaged while you work all muscle groups in the body.
        </p>
        <h3>Who Might Like It:</h3>
        <p>
          Those who like ashtanga but want less rigidity, anyone who wants a
          good workout, and anyone who wants a less spiritual yoga practice.
        </p>
      </div>
      <div className="types-page__type--card1">
        <h3>Restorative Yoga</h3>
        <p>
          If you walked by a restorative yoga class, you might think everyone
          was taking a nap on their mats. This form of yoga uses props to
          support the body. The goal is to completely relax into poses, which
          are held for at least five minutes but often longer. This means that
          you might only do a handful of poses in a class, and it’s perfectly
          acceptable to drift into sleep during them.
        </p>
        <p>
          Some teachers might even lead you through yoga nidra – a guided
          meditation that allows you to hover blissfully between sleep and wake.
          One hour in yoga nidra is said to equal a few hours of shuteye, and
          while that can be a good self-care tool, it can’t replace a healthy
          night’s sleep. Though all different types of yoga can aid stress
          relief and brain health, restorative yoga places its focus on
          down-regulating the nervous system. Restorative yoga can benefit those
          who need to chill out and de-stress, and it can also be used as part
          of your rest-day self-care.
        </p>
        <h3>Who Might Like It:</h3>
        <p>
          Anyone who needs to de-stress, those dealing with pain, and someone
          who struggles to relax.
        </p>
      </div>
      <div className="types-page__type--card2">
        <h3>Prenatal Yoga</h3>
        <p>
          Yoga can be a wonderful workout for moms-to-be. It often focuses on
          easing pains associated with pregnancy, such as sore hips or an aching
          low back. Prenatal yogaprovides stress relief, exercise, and self-care
          in one session, and the breathing exercises can come in handy during
          labor and delivery.
        </p>
        <p>
          Since this is a practice designed specifically for moms-to-be, it
          excludes poses that might be too taxing or unsafe for the changing
          body. (But make sure you check in with your doctor before beginning a
          yoga practice, if you are pregnant.) Yoga for pregnancy, such as the
          Active Maternity series on Beachbody On Demand, also often includes
          plenty of exercises to prepare your body for delivery, like squats and
          pelvic floor work.
        </p>
        <h3>Who Might Like It:</h3>
        <p>Moms-to-be and new moms who are easing back into exercise.</p>
      </div>
      <div className="types-page__type--card1">
        <h3>Aerial Yoga</h3>
        <p>
          Aerial yoga — sometimes called anti-gravity yoga — is relatively new,
          but quickly catching on. It involves traditional yoga poses with the
          added support of a strong, silky hammock that hangs from the ceiling.
          The hammock is used as a supportive prop in poses like pigeon or
          downward dog, and helps you more easily perform inverted poses (like
          headstands and handstands) that might be beyond your abilities or
          comfort levels. It’s also used for a cocoon-like savasana (the final
          resting pose at the end of a yoga class). Classes can be either
          physically challenging or relaxing.
        </p>
        <h3>Who Might Like It:</h3>
        <p>
          Those who want a nontraditional yoga experience, or anyone who wants
          the benefits of inversions but might fear going upside down on their
          own.
        </p>
      </div>
      <div className="types-page__type--card2">
        <h3>Acro Yoga</h3>
        <p>
          Acro yoga takes familiar yoga poses — like downward dog or plank — and
          makes them double the fun (and sometimes double the work) by adding a
          partner. One partner serves as the “base” on the ground, while the
          other is the “flyer” who contorts themselves on the soles of the
          base’s feet. (A spotter should always be involved for safety). [Acro
          yoga] allows people to break from the rectangular confines of their
          yoga mat and find a connection with their fellow practitioners.
        </p>
        <p>
          This type of yoga helps you playfully explore your mind-body
          connection, develops effective communication skills with a partner,
          and aids in setting appropriate boundaries. If you work as a base, it
          builds a strong lower body and core. Working as a flyer requires
          flexibility and strength, not to mention trust.
        </p>
        <h3>Who Might Like It:</h3>
        <p>
          Those who enjoy practicing with a partner, couples looking to build
          trust and intimacy, or anyone with an adventurous streak who likes to
          go upside down.
        </p>
      </div>
    </div>
  );
}
