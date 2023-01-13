import React, { FC, ReactElement, useEffect, useState } from 'react'
import SidebarHeader from './components/SidebarHeader'
import Switch from './components/Switch'
import SidebarNav from './components/SidebarNav'

const App: FC = (): ReactElement => {
  const [colorTheme, setColorTheme] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setColorTheme("dark");
    } else {
      document.documentElement.classList.add('light')
      setColorTheme("light")
    }
  }, [])

  const handleModeChange = (): void => {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setColorTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
        setColorTheme('light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
        setColorTheme('light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setColorTheme('dark');
      }
    }
  };

  return (
    <div className="font-default w-full h-screen text-base bg-white text-zinc-900 dark:text-white dark:bg-darkbg p-3 transition-all duration-200">
      <div className="h-full border-2 border-zinc-300 dark:border-zinc-700 rounded-2xl overflow-hidden flex transition-all duration-200">
        <section className="w-64 flex flex-col justify-between justify-items-start gap-6 p-3">
          <SidebarHeader />
          <SidebarNav />
          <Switch theme={colorTheme} toggleTheme={handleModeChange} />
        </section>
        <section className="flex-1 p-3 bg-zinc-200 dark:bg-zinc-800">
          <div className="overflow-auto h-full">
            <button onClick={handleModeChange}>change</button>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sint illum voluptate inventore velit consequuntur, assumenda quaerat culpa molestiae ex necessitatibus accusantium labore asperiores, ad harum veritatis quibusdam facere voluptates aut? Fugit ullam id quaerat repudiandae maiores laudantium harum accusantium quis. Libero possimus eveniet doloribus eaque ab quasi rem, temporibus accusantium, modi explicabo laborum. Ipsam enim voluptatem itaque numquam provident architecto quo at, quas voluptatum similique iure in. Quibusdam tenetur corrupti quia exercitationem laborum illo, provident alias neque enim, eum quas magni in. Ut quod nisi consectetur? Quibusdam quas praesentium, consectetur vel libero animi, sed quo ex nostrum tenetur modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores architecto facilis dolorem a dicta nemo unde necessitatibus numquam officiis dolor nihil enim amet cumque provident fugiat nobis expedita, alias exercitationem! Corporis libero maiores necessitatibus recusandae ipsa asperiores, laboriosam delectus deleniti debitis veniam commodi odio, repellat hic distinctio eos explicabo itaque reiciendis modi ab ex accusamus, corrupti consequuntur tempore. Iste exercitationem consequuntur, quisquam cum quo sed veniam tempora error? Quasi eveniet aspernatur voluptates numquam consequuntur distinctio voluptatum quos commodi rerum, fugit ullam. Praesentium adipisci iure, recusandae, sint voluptatibus sed cum illum commodi asperiores explicabo voluptates assumenda consequuntur debitis hic? Nobis, aliquid officiis. Magni odio sequi alias dolorem explicabo sed, voluptatem placeat animi praesentium rem officiis inventore fuga aut earum quo. Saepe nostrum ducimus dolorem vero atque itaque, sunt dicta minima similique est adipisci aliquid ea suscipit, in consequatur obcaecati sint impedit placeat? Porro natus facere odit voluptatem consequuntur. Reiciendis quasi placeat vero, rerum impedit sapiente, dolores accusamus molestiae culpa ipsum ex nulla, nihil alias. Nostrum at veniam, reiciendis delectus voluptatem quia suscipit tempore obcaecati rerum aliquid inventore consequatur? Iure ipsa, ea rerum accusantium culpa id repudiandae inventore qui cum accusamus magni deserunt numquam dolores doloremque ipsum consequuntur quis fugiat. Minima, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos assumenda sequi soluta ut nobis, veritatis quas tempore minima deleniti, animi cupiditate recusandae quia, placeat odit deserunt in fugiat error aliquam culpa praesentium officia quo atque optio? Dicta autem voluptas cum eos in, consectetur quasi impedit iure non numquam dolores molestiae. Nemo eos natus fugiat. Nemo perferendis possimus magni qui nostrum repellendus recusandae alias placeat, ad ducimus vel quis eligendi, error maiores porro, reiciendis aspernatur sequi sapiente delectus id quam praesentium. Accusamus quibusdam consequatur ex dicta exercitationem. Vitae possimus explicabo quos assumenda nesciunt, accusantium reiciendis harum esse! Facere quisquam est nobis iure fuga iste dignissimos laudantium? Doloribus accusantium repellendus suscipit necessitatibus! Rem at esse beatae veniam numquam quam totam est adipisci temporibus expedita dolores quasi facilis, quaerat aperiam sed ex facere aliquam magni id, eligendi aut, exercitationem cumque! Possimus iste, maiores laudantium debitis animi odio expedita eum sed iure aut! Nisi assumenda dolorum sint, consequatur odit ea, ducimus quidem quasi rem eaque laborum quam voluptates iusto aut! Et sint facilis optio, ex recusandae consequatur laborum quas accusamus ab? Repellat quos aliquam voluptatibus recusandae sunt placeat aut earum aperiam corporis enim nam debitis nobis nihil distinctio eum dolorem, quo esse illo ipsa veniam facere quisquam repudiandae ipsam a! Maiores, sequi? Magni, eaque ducimus dicta labore itaque error quas voluptas fugit expedita officiis, nostrum temporibus reprehenderit doloremque ipsa culpa quam voluptatibus omnis corrupti minima numquam dolorem ex laudantium dolorum blanditiis! Voluptatem placeat illo libero beatae voluptatum tenetur ullam pariatur in dignissimos, fugit quasi ab ipsum possimus commodi iure iste dolor id. Dolor, assumenda laborum minus nulla eos quae aperiam ipsam. Provident, magnam. Assumenda illo laborum similique obcaecati! Nostrum perspiciatis assumenda deleniti, accusamus, animi est dolores quia architecto expedita sunt fuga, facere quam dolor ab cumque numquam vero. Ex repellat unde deleniti libero illum aliquid laboriosam aspernatur? Aut laborum minus provident in numquam error adipisci vel eum voluptas culpa earum necessitatibus nam nemo placeat expedita dolorem, tempore molestias nesciunt. Iure obcaecati deleniti nobis cumque modi aliquid debitis natus ipsam enim? Eius quod error ducimus sunt expedita deleniti facere debitis, maxime vel maiores, esse impedit beatae quaerat, ratione at quibusdam ex enim doloremque nostrum quos quas delectus molestiae iusto placeat? Id necessitatibus nemo animi aspernatur voluptatibus esse totam quam mollitia, ipsum fugiat ab dolore ullam corrupti voluptates obcaecati consectetur nisi neque reiciendis! Dolorem, eum sunt non nam saepe magni nihil ipsum laudantium soluta pariatur animi natus velit inventore molestias nemo veniam, atque consequuntur deserunt molestiae. Sequi a unde maiores, similique debitis, molestiae vel praesentium eligendi ducimus inventore excepturi. Accusamus perspiciatis dolorem doloremque omnis nostrum, itaque delectus asperiores nihil illum laborum eligendi esse aliquam nemo corrupti. Debitis deleniti soluta excepturi, iusto neque maiores id, vero adipisci obcaecati amet hic illum perferendis dignissimos repellat accusamus similique qui est sequi pariatur veritatis voluptate a, ducimus cumque ad. Eius asperiores labore dicta at libero cupiditate autem quas deleniti saepe modi deserunt optio omnis quae quisquam, officia explicabo blanditiis. Provident aliquid odio, molestiae blanditiis, expedita nam, ea a neque velit accusantium quo ipsum? Dolorum voluptates corrupti aliquid vel qui sapiente asperiores, iusto voluptas provident minima, quam incidunt vitae perspiciatis laboriosam odio! Odit doloremque quas officia beatae officiis, optio itaque possimus magnam reiciendis eius voluptatum fuga architecto assumenda ut sit, eveniet eos nihil, totam perferendis dolore voluptas? Est nobis impedit consequatur cumque consectetur ipsa, perferendis dolore quibusdam. Quidem repellat beatae magnam. Laborum non laboriosam, sequi ipsam exercitationem nostrum impedit obcaecati reprehenderit culpa facere modi debitis commodi fuga, et necessitatibus quia? Hic maiores totam ducimus quam a temporibus neque aut reprehenderit iste, enim ipsa in consequatur dolore? Quo est, esse nobis voluptatem enim veniam soluta velit impedit itaque debitis minus ea beatae expedita. Fugit est, laboriosam sunt odio expedita qui dolores doloribus culpa quas fugiat similique molestiae commodi facilis corrupti quis a. A, magni voluptatem quam omnis minus odit rem iste aspernatur sunt expedita ea consequuntur nisi ad praesentium impedit veniam delectus laborum ratione mollitia illo, repellendus non odio! Quidem autem consequatur quas esse sapiente vel vitae corrupti est nesciunt ratione accusamus neque sequi et soluta nemo obcaecati, saepe dolor nulla labore reiciendis tempora debitis facere. Et exercitationem animi sint omnis eveniet magni expedita vel sunt? Quod, voluptas. Sunt sapiente laboriosam dolorem quaerat laborum quibusdam officia optio, ex dicta recusandae voluptatem rerum illo dolores esse! Voluptates error rerum nihil iusto eaque, dolore quisquam architecto natus, accusantium dolorum omnis libero nesciunt eveniet consectetur reiciendis vitae saepe recusandae id culpa numquam nisi officiis nulla molestias. Omnis necessitatibus tenetur magni ratione dolor fuga, alias officia iusto excepturi vero qui modi libero nulla doloremque earum beatae. Ipsam quisquam veniam corporis iste numquam sequi similique! Nobis sed quam ipsa enim doloremque dolorum non ipsam, sint expedita inventore neque vel libero ex, dolorem vero? Rem natus, dolorum optio ratione libero harum, sint repudiandae velit architecto asperiores ut rerum excepturi totam earum modi atque dolores vitae ipsa aut, at deserunt officiis similique! Eum, minus accusamus libero nam iste pariatur ipsum blanditiis, incidunt consequatur atque modi officia ipsam veniam corrupti corporis ad totam explicabo nesciunt eius saepe quo. Reiciendis vel cumque quidem perspiciatis unde asperiores non fugiat placeat, dolore inventore ab velit nostrum fugit iure aut assumenda, a modi saepe aspernatur eos? Maxime accusamus repellat animi dolorum, non quo vitae dolore odit voluptates porro labore quisquam accusantium illo eligendi, explicabo aperiam quasi facilis laudantium deserunt rerum esse quae, et error? Nobis, impedit? Laborum quibusdam numquam nobis soluta nam deserunt eveniet earum eius maiores, consequatur, laboriosam, quis amet eum. Unde velit maiores odio! Sint voluptate dignissimos cumque ipsam? Consectetur, illum! Velit architecto aspernatur omnis accusantium quaerat? Repellendus minima perferendis quidem quia expedita ipsam hic velit sunt repudiandae exercitationem est, rem esse molestiae, dolor, neque quisquam fuga? Ut laboriosam iste provident voluptatum. Animi, dolor nemo veniam possimus quaerat quisquam, consequuntur numquam, quam ipsum velit illum provident ad mollitia officiis? Vero error ex, totam corporis accusantium minus praesentium recusandae cum fugit aliquam quaerat ut placeat aliquid officia ducimus reprehenderit quia excepturi neque eaque nulla assumenda fuga id? Odit, ratione magni. Molestias, libero?
          </div>
        </section>
      </div>
    </div>
  )
}

export default App