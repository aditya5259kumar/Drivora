const programMenu = document.querySelectorAll(".program");
const programDeatil = document.querySelector(".programDetail");

const removeActiveClass = () => {
  programMenu.forEach((button) => {
    button.classList.remove("active");
  });
};

programMenu.forEach((program) => {
  program.addEventListener("click", () => {
    removeActiveClass();
    if (program.classList.contains("express")) {
      program.classList.add("active");
      programDeatil.innerHTML = `
            <div class="container programDetail-container">
        <div class="programDetail-left">
          <h2>express lessons</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            repellendus perspiciatis earum mollitia animi ipsam, ducimus quia
            laudantium maiores porro quos molestias vitae nihil voluptatem
            commodi facere ea rerum aliquid.
          </p>
          <div class="programDetail-images">
            <div>
              <img src="../assets/32323.jpg" alt="" />
            </div>
            <div>
              <img src="../assets/graduate2.webp" alt="" />
            </div>
          </div>
          <h4>weekday only</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum ducimus necessitatibus quod cumque
            iure voluptatibus. Voluptatum mollitia quos similique.</p>
          <article>
            <h5>theory lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>
          <article>
            <h5>practical lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>
          <a href="../contact/contacts.htm" class="btn primary">Get Started Now</a>
        </div>

        <div class="programDetail-right">
          <article>
            <p class="h4-p">Express without license</p>
            <div>
              <h2>$2,420</h2>
              <p>For Non Students</p>
            </div>
            <h2>$2,124</h2>
            <p>For Students</p>
        </article>
        <article>
          <p class="h4-p">Express with standard license</p>
          <div>
            <h2>$2,650</h2>
            <p>For Non Students</p>
          </div>
          <h2>$2,560</h2>
          <p>For Students</p>
      </article>
      <article>
        <p class="h4-p">Express with premium license</p>
        <div>
          <h2>$3,90</h2>
          <p>For Non Students</p>
        </div>
        <h2>$3,750</h2>
        <p>For Students</p>
        <p>License will be ready 2 weeks after completion</p>
      </article>
    </div>
      </div>
            `;
    } else if (program.classList.contains("polishing")) {
      program.classList.add("active");
      programDeatil.innerHTML = `
      <div class="container programDetail-container">
        <div class="programDetail-left">
          <h2>polishing lessons</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            repellendus perspiciatis earum mollitia animi ipsam, ducimus quia
            laudantium maiores porro quos molestias vitae nihil voluptatem
            commodi facere ea rerum aliquid.lorem ygasyud  gadausydga yasdguyas  asydguyasga gas asdas ghas uuausd asdyu qywudg yudgfyuag yfduyqwb qwgbahy bshjgagddsa sdgash ayusdya asdas hasdgasuydg hasudy ytyuasgd tasydwebg sydt gausdy gua ygasuyd ygy uguyasd auys dggai.
          </p>
          <div class="programDetail-images">
            <div>
              <img src="../assets/graduate6.jpg" alt="" />
            </div>
            <div>
              <img src="../assets/practical10.jpg" alt="" />
            </div>
          </div>
          <h4>included in weekday streams</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum ducimus necessitatibus quod cumque
            iure voluptatibus. Voluptatum mollitia quos similique.</p>
          <article>
            <h5>theory lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>
          <article>
            <h5>practical lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>
          <h4>included in weekend streams</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum ducimus necessitatibus quod cumque
            iure voluptatibus. Voluptatum mollitia quos similique.</p>
          <article>
            <h5>theory lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>
          <article>
            <h5>practical lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>
          <a href="../contact/contacts.htm" class="btn primary">Get Started Now</a>
        </div>
        <div class="programDetail-right">
          <article>
            <p class="h4-p">Polishing without license</p>
            <div>
              <h2>$1,540</h2>
              <p>For Non Students</p>
            </div>
            <h2>$1,786</h2>
            <p>For Students</p>
        </article>
        <article>
          <p class="h4-p">Polishing with standard license</p>
          <div>
            <h2>$2,160</h2>
            <p>For Non Students</p>
          </div>
          <h2>$2,210</h2>
          <p>For Students</p>
      </article>
      <article>
        <p class="h4-p">Polishing with premium license</p>
        <div>
          <h2>$2,410</h2>
          <p>For Non Students</p>
        </div>
        <h2>$2,856</h2>
        <p>For Students</p>
        <p>License will be ready 2 weeks after completion</p>
      </article>
    </div>
    </div>
      `;
    } else if (program.classList.contains("license")) {
      program.classList.add("active");
      programDeatil.innerHTML = `
      <div class="container programDetail-container">
        <div class="programDetail-left">
          <h2>license only</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            repellendus perspiciatis earum mollitia animi ipsam, ducimus quia
            laudantium maiores porro quos molestias vitae nihil voluptatem
            commodi facere ea rerum aliquid.lorem ygasyud  gadausydga yasdguyas  asydguyasga gas asdas ghas uuausd asdyu qywudg yudgfyuag yfduyqwb qwgbahy bshjgagddsa sdgash ayusdya asdas hasdgasuydg hasudy ytyuasgd tasydwebg sydt gausdy gua ygasuyd ygy uguyasd auys dggai.
          </p>
          <div class="programDetail-images">
            <div>
              <img src="../assets/graduate4.jpg" alt="" />
            </div>
            <div>
              <img src="../assets/practical1.jpg" alt="" />
            </div>
          </div>
          <h4>weekdays only</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum ducimus necessitatibus quod cumque
            iure voluptatibus. Voluptatum mollitia quos similique.</p>
          <article>
            <h5>theory lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>
          <article>
            <h5>practical lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>
          <a href="../contact/contacts.htm" class="btn primary">Get Started Now</a>
        </div>

        <div class="programDetail-right">
          <article>
            <p class="h4-p">STANDARD LICENSE</p>
            <div>
            <h2>$1,650</h2>
            <p>For Students</p>
        </article>
        <article>
          <p class="h4-p">EXPRESS LICENSE</p>
          <h2>$1,90</h2>
          <p>For Students</p>
      </article>
      <article>
        <p class="h4-p">THEORY ONLY</p>
        <h2>$600</h2>
        <p>For Students</p>
        <p>License will be ready 2 weeks after completion</p>
      </article>
    </div>
    </div>
      `;
    } else if (program.classList.contains("regular")) {
      program.classList.add("active");
      programDeatil.innerHTML = 
      `
      <div class="container programDetail-container">
        <div class="programDetail-left">
          <h2>regular package</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            repellendus perspiciatis earum mollitia animi ipsam, ducimus quia
            laudantium maiores porro quos molestias vitae nihil voluptatem
            commodi facere ea rerum aliquid.
          </p>
          <div class="programDetail-images">
            <div>
              <img src="../assets/graduate3.jpg" alt="" />
            </div>
            <div>
              <img src="../assets/practical8.jpg" alt="" />
            </div>
          </div>
          <h4>included in weekday streams</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum ducimus necessitatibus quod cumque
            iure voluptatibus. Voluptatum mollitia quos similique.</p>
          <article>
            <h5>theory lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>
          <article>
            <h5>practical lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>

          <h4>included in weekend streams</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum ducimus necessitatibus quod cumque
            iure voluptatibus. Voluptatum mollitia quos similique.</p>
          <article>
            <h5>theory lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>
          <article>
            <h5>practical lessons</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at nam iure atque praesentium
              impedit eligendi laudantium, magni itaque nesciunt, labore assumenda repudiandae. Voluptas numquam sed
              iste expedita ullam alias.</p>
          </article>
          <a href="../contact/contacts.htm" class="btn primary">Get Started Now</a>
        </div>

        <div class="programDetail-right">
          <article>
            <p class="h4-p">regular without license</p>
            <div>
              <h2>$1,990</h2>
              <p>For Non Students</p>
            </div>
            <h2>$1,840</h2>
            <p>For Students</p>
        </article>

        <article>
          <p class="h4-p">regular with standard license</p>
          <div>
            <h2>$2,650</h2>
            <p>For Non Students</p>
          </div>
          <h2>$2,560</h2>
          <p>For Students</p>
      </article>

      <article>
        <p class="h4-p">regular with premium license</p>
        <div>
          <h2>$2,90</h2>
          <p>For Non Students</p>
        </div>
        <h2>$2,750</h2>
        <p>For Students</p>
        <p>License will be ready 2 weeks after completion</p>
      </article>
    </div>
      </div>
      `
    }
  });
});
