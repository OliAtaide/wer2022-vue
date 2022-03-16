<template>
  <div class="home">
    <section class="banner bg-banner-one overlay">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Content Block -->
            <div class="block">
              <!-- Coundown Timer -->
              <div class="timer"></div>
              <h1 class="">WER</h1>
              <h4>
                <span
                  ><b
                    >&NonBreakingSpace;Workshop on Requirements
                    Engineering&NonBreakingSpace;</b
                  ></span
                >
              </h4>
              <h6>
                August 23-26, 2022 -
                <span
                  >&NonBreakingSpace;VIRTUAL&NonBreakingSpace;MODE&NonBreakingSpace;</span
                >
              </h6>
              <!-- Action Button -->
              <a href="call4papers.html" class="btn btn-white-md"
                >Call for papers</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====  End of Banner  ====-->

    <!--===========================
=            About            =
============================-->

    <section class="section about">
      <div class="container">
        <div class="row">
          <!--<div class="col-lg-4 col-md-6 align-self-center">
				<div class="image-block bg-about">
					<img class="img-fluid" src="@/assets/images/background/Cajueiro.jpeg" alt="Cajueiro">
				</div>
			</div> -->

          <div class="col-lg-12 col-md-8 align-self-center">
            <div class="content-block">
              <h2>About The <span class="alternate">WER2022</span></h2>
              <div class="description-one">
                <p>
                  WER is an important forum for discussion of relevant issues in
                  the area of Requirements Engineering. This workshop is
                  performed since 1998. The workshop has alternatively held in
                  Latin American countries, Canada, Spain and Portugal.
                </p>
              </div>
              <div class="description-two">
                <p>
                  WER has always invited submissions of high quality unpublished
                  papers describing novel research and/or industrial experiences
                  in the field of Requirements Engineering. Although the
                  Workshop is based on scientific papers, it provides a variety
                  of events, activities, presentations and opportunities for
                  valuable interactions and networking; the discussion among the
                  participants is privileged and encouraged during the meeting.
                  Papers are published by the WER organization in a book with
                  ISBN number. Additionally, papers are indexed by DBLP and made
                  available in
                  <a href="http://wer.inf.puc-rio.br/WERpapers"
                    ><span class="alternate">WERpapers</span></a
                  >
                  repository.
                </p>
              </div>
              <div class="description-three">
                <p>
                  In 2022, in its twentieth fifth edition, WER will be held in a
                  <b>virtual mode</b>. For more information, contact
                  <span class="alternate">wer2022@dimap.ufrn.br.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====  End of About  ====-->

    <!--==============================
=            Chairs            =
===============================-->

    <section class="section speakers bg-speaker overlay-lighter">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Section Title -->
            <div class="section-title white">
              <h3>Local Organization</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="s in speakers" v-bind:key="s.nome" class="col-lg-3 col-md-4 col-sm-6">
            <!-- Speaker 1 -->
            <div class="speaker-item">
              <div class="image">
                <img
                  v-bind:src="s.img"
                  alt="Marcia Lucena"
                  class="img-fluid"
                />
              </div>
              <div class="content text-center">
                <h5>{{ s.nome }}</h5>
                <p>Local Chair</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="speaker-item">
              <div class="content text-center">
                <p>Date</p>
                <h5>23 - 26 August 2022</h5>
                <p>Location</p>
                <h5>Virtual Mode</h5>
                <p>Organization</p>
                <h5>UFRN</h5>
                <h5>DIMAp e IMD</h5>
              </div>
            </div>
          </div>
          <!--			<div class="col-lg-3 col-md-4 col-sm-6">
				<div class="speaker-item">
					<div class="image">
						<img src="@/assets/images/speakers/Julio_Leite.jpeg" alt="Julio Leite" class="img-fluid">
					</div>
					<div class="content text-center">
						<h5>Julio Leite</h5>
						<p>Steering Committee</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				<div class="speaker-item">
					<div class="image">
						<img src="@/assets/images/speakers/Jaelson_Castro.jpeg" alt="Jaelson Castro" class="img-fluid">
					</div>
					<div class="content text-center">
						<h5>Jaelson Castro</h5>
						<p>Steering Committee</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				<div class="speaker-item">
					<div class="image">
						<img src="@/assets/images/speakers/Maria_Lencastre.jpeg" alt="Maria Lencastre" class="img-fluid">
					</div>
					<div class="content text-center">
						<h5>Maria Lencastre</h5>
						<p>PC Chair</p>
					</div>
				</div>
			</div> -->
        </div>
      </div>
    </section>

    <!--====  End of Speakers  ====-->

    <!--==============================
=            Sponsors            =
===============================-->

    <section class="sponsors section bg-sponsors">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h3>Our <span class="alternate">Organization</span></h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <!-- Title -->

            <div class="block text-center">
              <!-- Sponsors image list -->
              <ul class="list-inline sponsors-list">
                <li class="list-inline-item">
                  <div class="image-block text-center">
                    <a href="#">
                      <img
                        src="@/assets/images/sete.png"
                        alt="sete-logo"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </li>
                <li class="list-inline-item">
                  <div class="image-block text-center">
                    <a href="#">
                      <img
                        src="@/assets/images/imd.png"
                        alt="imd-logo"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </li>
                <li class="list-inline-item">
                  <div class="image-block text-center">
                    <a href="#">
                      <img
                        src="@/assets/images/dimap.png"
                        alt="dimap-logo"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </li>
                <li class="list-inline-item">
                  <div class="image-block text-center">
                    <a href="#">
                      <img
                        src="@/assets/images/ufrn.png"
                        alt="ufrn-logo"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <!-- Title -->
            <div class="sponsor-title text-center">
              <h3>Sponsors</h3>
            </div>
            <div class="block text-center">
              <!-- Sponsors image list -->
              <ul class="list-inline sponsors-list">
                <li class="list-inline-item">
                  <div class="image-block text-center">
                    <a href="#">
                      <img
                        src="@/assets/images/lais.png"
                        alt="lais-logo"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </li>
                <li class="list-inline-item">
                  <div class="image-block text-center">
                    <a href="#">
                      <img
                        src="@/assets/images/ufrn.png"
                        alt="ufrn-logo"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="sponsor-btn text-center">
              <a href="mailto:wer2022@dimap.ufrn.br" class="btn btn-main-md"
                >Become a sponsor</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {
      speakers: [
        {
          nome: "Márcia Lucena",
          img: require("@/assets/images/speakers/Marcia_Lucena.png"),
        },
        {
          nome: "Lyrene Silva",
          img: require("@/assets/images/speakers/Lyrene_Silva.jpg")
        },
        {
          nome: "Isabel Nunes",
          img: require("@/assets/images/speakers/Isabel_Nunes.png")
        }
      ],
    };
  },

  components: {
  },
};
</script>
