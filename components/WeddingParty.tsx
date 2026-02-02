'use client'

import { motion } from 'framer-motion'
import { Instagram, Heart } from 'lucide-react'

// Sample data - replace with actual bridesmaids and groomsmen info
const bridesmaids = [
  {
    name: 'Abolaji Abigael Omotayo',
    nickname: 'TSplash',
    instagram: '',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900951/jddiclhdylfbr2mzcpk9.jpg',  
    statement: 'May you both be a safe place for each other,full of trust, warmth and enduring love',
  },
  {
    name: 'Fasanu Elizabeth Adeola',
    nickname: 'Lizzie',
    instagram: '@lizzie_herself',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900950/wa8cr7wsqvdprpx2jai4.jpg',  
    statement: 'You are a going to make a great couple, And I pray that the lord keep and bless your home always. Amen',
  },
  {
    name: 'Yusuf Zainab',
    nickname: 'Zizi',
    instagram: '@Daisyzynab',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900956/dtrplasbuasugs9jwxor.jpg',  
    statement: 'your home will be amongst the best ...',
  },
  {
    name: 'Ojekunle Gift Oluwatobi',
    nickname: 'Gifted',
    instagram: '@holuwatobi_gift',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900956/bxsdbpl9edqgvjlubqx3.jpg',  
    statement: 'Olajumoke mi as I will always call you, I pray your Home will be blessed,with wealth, children, and powerful connection in Jesus name 🙏. I love you Boo 💕 💕',
  },


{
    name: 'Gloria Archisheko jigo',
    nickname: 'Riah😻',
    instagram: '@gloreeyah_zhigoo',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900956/f1xsazvbukxqxhx6woyo.jpg',  
    statement: 'I pray this union stands as a testimony of love, faith, and commitment, inspiring many beautiful homes.😍',
  },
  {
    name: 'Akinwumi Mopelola',
    nickname: 'Mope',
    instagram: '@Mopelolalove1',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900954/ojwk6sf3kcarl5yh7uym.jpg',  
    statement: 'May your marriage be a place of peace in a noisy world, a safe space where love is chosen daily and friendship never fades',
  },
  {
    name: 'Monsurah Hassan',
    nickname: 'Monsurah',
    instagram: '@phunmeelaryour',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900953/qbqnyudricg4kflll8b7.jpg',  
    statement: ' May your love continue to grow stronger, your home be filled with peace, and your journey together be full of joy.',
  },


  {
    name: 'Oluwanifemi Akin-Fasae',
    nickname: 'Niffy',
    instagram: '@thisisnifemii',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900953/axpfg5wx36bsc1mlu1m7.jpg',  
    statement: 'I love you both so much and I pray your marriage blossoms and flourishes with light and love forever. Amen!',
  },
  {
    name: 'Bamidele Oluwatosin Helen',
    nickname: 'airlyn',
    instagram: '@Daisyzynab',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900952/gxmwf9n5r9bybwncijcr.jpg',  
    statement: 'May God bless your marriage with love that endures, joy that overflows, and peace that surpasses all understanding..',
  },
  {
    name: 'Abdulrahim Khadija ',
    nickname: 'Khida',
    instagram: '@Khida_Couture',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900952/rqa8qv5qfbplsxdrlrp2.jpg',  
    statement: 'May your marriage be a place where your souls rest, where love grows quietly, and where you always choose each other, even on the hard days',
  },
  {
    name: 'Itunuoluwapofunmi',
    nickname: '🤷🏾‍♀️',
    instagram: '@_Itunuoluwapo',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900952/rz3uddruoyulytneqwxh.jpg',  
    statement: 'God is going to make your marriage heaven on earth 🙏',
  },
  {
    name: 'Fakorede Damilola Racheal',
    nickname: 'D’vogue',
    instagram: '@Styled-by-dvogue',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900951/hqe7lbcd52g2yb94r0k2.jpg',  
    statement: 'May your new home be filled with God’s love and blessings.',
  },
  {
    name: 'Adaraniwon Juwonlo Eri-Ife',
    nickname: 'eri_ifeoluwaa',
    instagram: '@eri_ifeoluwaa',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900950/olxblq8mwoynq626yyev.jpg',  
    statement: 'God definitely writes the best love stories and yours is no exception. May your home be continually filled with sweet and new wine everyday. I love you both so much❤️.',
  },
{
    name: 'Oladimeji Aminat Omolara',
    nickname: 'Joyway',
    instagram: '@JoywayAgro',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900951/i8ahv7fhqbbdwifvjaud.jpg',  
    statement: 'You both found something rare and special in each other. May your love continue to grow stronger through every season of life❤️',
  },
  {
    name: 'Adeleke Kehinde Moyosoluwa',
    nickname: 'Khizzy',
    instagram: '@moyo_so_luwa',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1770031592/b55_sfdaqf.jpg',  
    statement: 'Your love will flourish, your hearts will remain united, and your marriage will be filled with joy and beauty, in Jesus’ name. 🙏🏾',
  },


]







const groomsmen = [
  {
    name: 'Victor Oluwafemi',
    nickname: 'JoyWay',
    instagram: '@Livelyfemi',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900955/gncimloq2y6z0o3kr4qe.jpg',  
    statement: 'Take things easy with yourselves, as time goes on, you’d get to understand each other more.',
  },
  {
    name: 'Olaniyi Miracle Oluwapelumi',
    nickname: 'Hemhigh',
    instagram: '@official_miracle.o',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900955/uglw1q5tgmmjdtnyqwjw.jpg',  
    statement: 'May your love grow stronger every day. May God bless your union with peace, joy, and endless laughter.',
  },
  {
    name: 'Tumilara Adaraniwon',
    nickname: 'nill',
    instagram: '@thefeyitumilara',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900955/yw8c5sofegozv5b3fsjk.jpg',  
    statement: 'May your union be built on love, respect, patience, and faith, and may your home be a place of comfort and peace.',
  },
  {
    name: 'Rabiu Idowu Olalere',
    nickname: 'Atewo',
    instagram: '@Dc_codeh_gadgets',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900955/fiy3wrtobkgfuy3dzprb.jpg',  
    statement: 'May your love continue to grow deeper with every smile you share and every challenge you overcome together',
  },
   {
    name: 'Oluwatobi FALUSI',
    nickname: 'PHALUS',
    instagram: '@Luwalusi',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768979370/IMG_3303.JPG_hkfb2w.jpg',  
    statement: 'I wish you a lifetime of happiness, shared dreams and countless beautiful memories.',
  },


  {
    name: 'Nosa Bright',
    nickname: 'Pizzaboy',
    instagram: '@nobgraphics',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900953/kjsunmykbvltsef2eegx.jpg',  
    statement: 'May your love grow stronger with each day, your home be filled with peace and joy, and your journey together be blessed with unity, understanding, and endless grace.',
  },
  {
    name: 'Kazeem O. Ayobami',
    nickname: 'THE KING',
    instagram: '@koaphotography4u',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900953/nbqkfb7cfvd0qtcyxz22.jpg',  
    statement: ' May your love deepen with every new day, and may your home always be filled with peace, joy, and laughter.',
  },
  {
    name: 'Adelana Adebanjo O',
    nickname: 'SHAWARMA',
    instagram: '@Hardeybarnjo',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900952/wvoo7bpmlp4ocksaqnf7.jpg',  
    statement: 'Congratulations my beautiful Couple May your love deepen with every new day, and may your home always be filled with peace and joy',
  },



 {
    name: 'Idowu Andrew',
    nickname: 'ANDREE',
    instagram: '@Senor_andree',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900952/acqshkggqbdwtgjed1pc.jpg',  
    statement: 'Wishing you both a lifetime of happiness as you embark on this incredible journey together! May your love grow stronger with each passing day..',
  },
   {
    name: 'Emmanuel Oladokun',
    nickname: 'dtalkaddict',
    instagram: '@TheOladokun',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900952/liuzgdgphzbosur7l94e.jpg',  
    statement: 'May your love be full of laughter, your arguments short, and your understanding deep',
  },
   {
    name: 'Awoleye Stephen',
    nickname: 'Vanstephen ',
    instagram: '@iam_vanstephen',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900952/u2mdc0imt1zhrihdgs8e.jpg',  
    statement: 'May love be the anchor, joy be the spark, and peace be the guide as you embark on this beautiful journey together. Congratulations.',
  },
{
    name: 'Akinyemi ‘Femi',
    nickname: 'Femtech',
    instagram: '@fm_jef',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900950/bk0ovnomvyemkus6dlnr.jpg',  
    statement: 'Communicate, communicate, communicate 💬Laugh together often 😂Support each other\'s dreams 🌟Forgive and move forward 💫\nCherish the little moments ❤️',
  },


  {
    name: 'Olufemi Derick O',
    nickname: 'Derick',
    instagram: '@Shot_By_Derick',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1769700267/b1_ocoted.jpg',  
    statement: 'Congrats on finding your forever! 😊 May your love continue to be the guiding light in your life, just like it has been. Wishing you a lifetime of laughter, adventures, and I love yous.',
  },


    {
    name: 'ISRAEL OOSS',
    nickname: 'OOSSBABA',
    instagram: '@israel_ooss',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1770035612/b22_bm2viy.jpg',  
    statement: 'I strongly believe in both of you and I know your marriage will be a model and your kids will be happy to have you both has parents; so guys, never stop doing the work.',
  },

  {
    name: 'Ogunlade Ayobami',
    nickname: 'aynerd',
    instagram: '@aynerd95',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1770032006/ay_tbuyco.jpg',  
    statement: 'Be friends. Stay locked in. Just you two and God—nothing else. A three-fold cord is never easily broken. Congratulations on your wedding!',
  },

]





export default function WeddingParty() {
  return (
    <section id="wedding-party" className="py-24 px-4 bg-pearl">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl mb-6 text-deep-black">
            Our Wedding Party
          </h2>
          <p className="font-sans text-lg text-smoke max-w-2xl mx-auto">
            The special people who will stand beside us as we begin our forever
          </p>
        </motion.div>

        {/* Bridesmaids */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl mb-12 text-deep-black text-center"
          >
            Bridesmaids
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bridesmaids.map((bridesmaid, index) => (
              <motion.div
                key={bridesmaid.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-soft-white p-6 rounded-sm shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-full aspect-[3/4] bg-deep-black rounded-sm mb-4 overflow-hidden">
                  <img
                    src={bridesmaid.image}
                    alt={bridesmaid.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h4 className="font-display text-2xl text-deep-black mb-1">
                  {bridesmaid.name}
                </h4>
                
                <p className="font-elegant italic text-lg text-smoke mb-3">
                  "{bridesmaid.nickname}"
                </p>
                
                <a
                  href={`https://instagram.com/${bridesmaid.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-deep-black hover:opacity-70 transition-opacity mb-4"
                >
                  <Instagram size={18} />
                  <span className="font-sans text-sm">{bridesmaid.instagram}</span>
                </a>
                
                <p className="font-sans text-sm leading-relaxed text-smoke">
                  {bridesmaid.statement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="w-24 h-px bg-deep-black opacity-30" />
          <Heart className="mx-6 w-6 h-6 text-deep-black opacity-30 fill-deep-black" />
          <div className="w-24 h-px bg-deep-black opacity-30" />
        </div>

        {/* Groomsmen */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl mb-12 text-deep-black text-center"
          >
            Groomsmen
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {groomsmen.map((groomsman, index) => (
              <motion.div
                key={groomsman.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-deep-black text-soft-white p-6 rounded-sm shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-full aspect-[3/4] bg-soft-white rounded-sm mb-4 overflow-hidden">
                  <img
                    src={groomsman.image}
                    alt={groomsman.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h4 className="font-display text-2xl mb-1">
                  {groomsman.name}
                </h4>
                
                <p className="font-elegant italic text-lg opacity-70 mb-3">
                  "{groomsman.nickname}"
                </p>
                
                <a
                  href={`https://instagram.com/${groomsman.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity mb-4"
                >
                  <Instagram size={18} />
                  <span className="font-sans text-sm">{groomsman.instagram}</span>
                </a>
                
                <p className="font-sans text-sm leading-relaxed opacity-80">
                  {groomsman.statement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
