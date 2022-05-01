const puppeteer = require('puppeteer-core');
const CSV = require('./lib/csv');
require('dotenv').config()

const username = '#u_0_1i_3w > .story_body_container:nth-child(1) > ._7om2:nth-child(1) > ._4g34:nth-child(2) > ._5xu4:nth-child(1) > ._7om2:nth-child(1) > ._4g34:nth-child(1) > ._52jd:nth-child(1) strong:nth-child(1) > a:nth-child(1)';

let stop = false;

console.clear();

(async () => {
	try {

		let launchOptions = {
			headless: false,
			executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', // because we are using puppeteer-core so we must define this option
			args: ['--start-maximized']
		};
		const browser = await puppeteer.launch(launchOptions);

		const groupId = '757835074233066';
		const fbGroupBaseUrl = 'https://m.facebook.com/groups/';
		const urls = [/* ... */];
		const results = [];
		// for (const url of urls) {
		// 	const page = await browser.newPage();
		// 	await page.goto(url);

		// 	// run test code
		// 	const result = ...;
		// 	results.push(result);

		// 	await page.close();
		// }

		const page = await browser.newPage();

		// set viewport and user agent (just in case for nice viewing)
		await page.setViewport({ width: 1366, height: 768 });

		// go to the target web
		await page.goto(`${fbGroupBaseUrl}${groupId}`);
		console.log(await browser.version());


		await autoScroll(page, browser)
		// await browser.close();

		// const links = await page.evaluate(function () {


		// 	const names = [...document.querySelectorAll('.story_body_container')].map(name => {
		// 		let res;
		// 		const child = name.querySelector('header > div._5s61._2pii._5i2i._52wc > div._5xu4 > div > a > i');
		// 		child ? res = child.ariaLabel : res = 'TIDAK ADA';
		// 		return res;
		// 	});

		// 	const contents = [...document.querySelectorAll('._5rgt._5nk5._5msi')].map(name => name.textContent);

		// 	const links = [...document.querySelectorAll('._5rgt._5nk5._5msi>a')].map(name => name.href);

		// 	const postDate = [...document.querySelectorAll('._52jc._5qc4._78cz._24u0._36xo>a>abbr')].map(name => name.textContent.replace(' at', ''));

		// 	// [...document.querySelectorAll('.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8.b1v8xokw')].map(name => name.href)

		// 	const comments = [...document.querySelectorAll('footer._22rc')].map(name => {
		// 		let result;
		// 		name.querySelector('._1fnt>span._1j-c') ? result = name.querySelector('._1fnt>span._1j-c').textContent : result = '0 Komentar';
		// 		return Number(result.replace(' Komentar', ''));
		// 	})

		// 	const likes = [...document.querySelectorAll('footer._22rc')].map(name => {
		// 		let result;
		// 		name.querySelector('._1w1k>div._1g06') ? result = name.querySelector('._1w1k>div._1g06').textContent : result = '0';
		// 		return result;
		// 	})

		// 	const arrObj = Array(names.length).fill(null);
		// 	arrObj.map((el, i) => {
		// 		const obj = {}
		// 		obj.names = names[i];
		// 		obj.contents = contents[i];
		// 		obj.links = links[i];
		// 		obj.comments = comments[i];
		// 		obj.likes = likes[i];
		// 		obj.postdate = postdate[i];

		// 		return obj;
		// 	})
		// });
		// await page.click('#jsc_c_3q > span > .nc684nl6 > .oajrlxb2 > strong > span')
		// if (stop) {
		// 	await browser.close();
		// }
	} catch (error) {
		console.log(error.message)
	}
})();

const login = async (page) => {
	try {
		console.log('loggin.....')
		await page.waitForSelector('#mobile_login_bar')
		await page.click('#mobile_login_bar')

		// await page.waitForSelector('.groupChromeView > div > #mobile_login_bar > ._3-rj > ._4n43')
		// await page.click('.groupChromeView > div > #mobile_login_bar > ._3-rj > ._4n43')

		await page.waitForSelector('#m_login_email')
		await page.click('#m_login_email')
		await page.type('#m_login_email', process.env.USERNAME, { delay: 100 });

		await page.waitForSelector('#m_login_password')
		await page.click('#m_login_password')
		await page.type('#m_login_password', process.env.PASSWORD, { delay: 100 });

		await page.waitForSelector('._5rut > #login_form > ._2pie > #login_password_step_element > ._54k8')
		await page.click('._5rut > #login_form > ._2pie > #login_password_step_element > ._54k8')
		console.log('login finished')
	} catch (error) {
		console.log(error.message)
		return false
	}
}

async function autoScroll(page, browser) {

	await login(page);

	await page.waitForNavigation({ waitUntil: 'networkidle2' });

	const groupId = '757835074233066';
	const fbGroupBaseUrl = 'https://m.facebook.com/groups/';

	const newPage = await browser.newPage();

	// // set viewport and user agent (just in case for nice viewing)
	await newPage.setViewport({ width: 1366, height: 768 });
	// // go to the target web
	await newPage.goto(`${fbGroupBaseUrl}${groupId}#_=_`);

	const wait = async (duration) => {
		return new Promise(resolve => setTimeout(resolve, duration));
	};

	const monthConversion = {
		'Januari': 'January',
		'Februari': 'February',
		'Maret': 'March',
		'April': 'April',
		'Mei': 'May',
		'Juni': 'June',
		'Juli': 'July',
		'Agustus': 'August',
		'September': 'September',
		'Oktober': 'October',
		'November': 'November',
		'Desember': 'December',
	}

	let postDates = [];
	try {
		let lastPostDate = '30 April 2022';
		let dummyDate = '';
		while (new Date(lastPostDate).getTime() > new Date('1 January 2020 00:00').getTime()) {
			var distance = 100;
			await newPage.evaluate(`window.scrollBy(0, ${distance})`);

			// const delay = Math.floor(Math.random() * 500) + 400;
			await wait(300);


			// if (new Date(lastPostDate).getTime() >= new Date('1 Januari').getTime())
			postDates = await newPage.evaluate(function () {
				return [...document.querySelectorAll('.story_body_container')].map(date => {
					let res;
					const child = date.querySelector('header > div > div > div > div > div > a >abbr');
					const childAlternate = date.querySelector('._3q6s._78cw > header > div > div > a > abbr');

					child ? res = child : res = childAlternate;
					return res.textContent.replace(' pukul', '').replace('.', ':')
				});
			});

			arrLastPostDate = String(postDates[postDates.length - 1]).split(' ');
			if (arrLastPostDate.length == 3) {
				arrLastPostDate.splice(2, 0, '2022');
			}
			// console.log('arrLastPostDate', arrLastPostDate)

			arrLastPostDate[1] = arrLastPostDate[1].replace(arrLastPostDate[1], monthConversion[arrLastPostDate[1]]);
			lastPostDate = arrLastPostDate.join(' ');
			// .map(name => name.textContent.replace(' at', ''));
			// console.log('askhdkasdhj');

			console.log('lastPostDate', lastPostDate)
			// await newPage.waitForNavigation({ waitUntil: 'networkidle2' });
		}
		// console.log('total data', postDates.length);
	} catch (error) {
		console.log(error)
	}

	console.log('result', postDates);

	const saveToObj = async () => await newPage.evaluate(function () {

		const names = [...document.querySelectorAll('.story_body_container')].map(name => {
			let res;
			const child = name.querySelector('header > div._5s61._2pii._5i2i._52wc > div._5xu4 > div > a > i');
			child ? res = child.ariaLabel : res = 'TIDAK ADA';
			return res;
		});

		const postdates = [...document.querySelectorAll('.story_body_container')].map(date => {
			let res;
			const child = date.querySelector('header > div > div > div > div > div > a >abbr');
			const childAlternate = date.querySelector('._3q6s._78cw > header > div > div > a > abbr');

			child ? res = child : res = childAlternate;
			return res.textContent.replace(' pukul', '').replace('.', ':')
		});
		// const postdates = [...document.querySelectorAll('._52jc._5qc4._78cz._24u0._36xo>a>abbr')].map(name => name.textContent.replace(' pukul', '').replace('.', ':'));

		const contents = [...document.querySelectorAll('._5rgt._5nk5._5msi')].map(name => name.textContent);

		const links = [...document.querySelectorAll('._5rgt._5nk5._5msi>a')].map(name => name.href);

		const comments = [...document.querySelectorAll('footer._22rc')].map(name => {
			let result;
			name.querySelector('._1fnt>span._1j-c') ? result = name.querySelector('._1fnt>span._1j-c').textContent : result = '0 Komentar';
			return Number(result.replace(' Komentar', ''));
		})

		const likes = [...document.querySelectorAll('footer._22rc')].map(name => {
			let result;
			name.querySelector('._1w1k>div._1g06') ? result = name.querySelector('._1w1k>div._1g06').textContent : result = '0';
			return result;
		})

		const arrObj = Array(postdates.length).fill(null);
		const finalObj = arrObj.map((el, i) => {
			const obj = {}
			obj.post_date = postdates[i];
			obj.name = names[i];
			obj.content = contents[i];
			obj.link = links[i];
			obj.comments = comments[i];
			obj.likes = likes[i];

			return obj;
		})

		return finalObj;
	})

	const obj = await saveToObj();
	console.log('finale', obj);

	try {
		const csv = await CSV.save(obj);
		console.log('data saved to csv');
	} catch (error) {
		console.log(error.message);
	}

	// await browser.close();
	// await newPage.evaluate(async () => {


	// 	console.log('asdasd')
	// 	await new Promise((resolve, reject) => {
	// 		var timer = setInterval(async () => {

	// 			const postDate = [...document.querySelectorAll('._52jc._5qc4._78cz._24u0._36xo>a>abbr')].map(name => name.textContent.replace(' at', ''));
	// 			console.log('askhdkasdhj');
	// 			const lastPostDate = postDate[postDate.length - 1];

	// 			if (new Date(lastPostDate).getTime() >= new Date('20 April 00:35').getTime()) {
	// 				// if (totalHeight >= scrollHeight - window.innerHeight) {
	// 				clearInterval(timer);
	// 				// 	stop = true;
	// 				// }

	// 				// await newPage.waitForSelector('.title .mfsm .fcl')
	// 				// await page.click('.title .mfsm .fcl')
	// 				resolve();
	// 			}

	// 			var distance = 200;
	// 			window.scrollBy(0, distance);
	// 		}, 500);
	// 	});
	// });



	// const names = [...document.querySelectorAll('.story_body_container')].map(name => {
	// 	let res;
	// 	const child = name.querySelector('header > div._5s61._2pii._5i2i._52wc > div._5xu4 > div > a > i');
	// 	child ? res = child.ariaLabel : res = 'TIDAK ADA';
	// 	return res;
	// });

	// const contents = [...document.querySelectorAll('._5rgt._5nk5._5msi')].map(name => name.textContent);

	// const links = [...document.querySelectorAll('._5rgt._5nk5._5msi>a')].map(name => name.href);

	// const postDate = [...document.querySelectorAll('._52jc._5qc4._78cz._24u0._36xo>a>abbr')].map(name => name.textContent.replace(' at', ''));

	// const comments = [...document.querySelectorAll('footer._22rc')].map(name => {
	// 	let result;
	// 	name.querySelector('._1fnt>span._1j-c') ? result = name.querySelector('._1fnt>span._1j-c').textContent : result = '0 Komentar';
	// 	return Number(result.replace(' Komentar', ''));
	// })

	// const likes = [...document.querySelectorAll('footer._22rc')].map(name => {
	// 	let result;
	// 	name.querySelector('._1w1k>div._1g06') ? result = name.querySelector('._1w1k>div._1g06').textContent : result = '0';
	// 	return result;
	// })

	// const arrObj = Array(names.length).fill(null);
	// arrObj.map((el, i) => {
	// 	const obj = {}
	// 	obj.names = names[i];
	// 	obj.contents = contents[i];
	// 	obj.links = links[i];
	// 	obj.comments = comments[i];
	// 	obj.likes = likes[i];
	// 	obj.postdate = postdate[i];

	// 	return obj;
	// })

	// // [...document.querySelectorAll('.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8.b1v8xokw')].map(name => name.href)
}