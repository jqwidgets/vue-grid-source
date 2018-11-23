<template>
    <div class="row-details">
        <h1>jQWidgets Grid Row Details</h1>
        <p>
            This demo shows how to display row details after each Vue Grid row.
        </p>
        <JqxTabs ref="myTabs" :theme="'material'" :width="'100%'" :height="'100%'">
            <ul>
                <li style="margin-left: 30px;">Preview</li>
                <li>Source</li>
            </ul>
            <div>
                <JqxGrid ref="myGrid" :theme="'material'"
                         :width="getWidth" :source="dataAdapter" :columns="columns"
                         :rowdetails="true" :initrowdetails="initrowdetails"
                         :rowdetailstemplate="rowdetailstemplate" :ready="ready">
                </JqxGrid>
            </div>
            <div> 
                <pre><code ref="code">
    &lt;template>
        &lt;div>
           &lt;JqxGrid ref="myGrid" :theme="'material'"
                    :width="getWidth" :source="dataAdapter" :columns="columns"
                    :rowdetails="true" :initrowdetails="initrowdetails"
                    :rowdetailstemplate="rowdetailstemplate" :ready="ready">
           &lt;/JqxGrid>
        &lt;/div>
    &lt;/template>
    &lt;script>
        import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
        import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';
        export default {
            components: {
                JqxGrid,
                JqxTabs
            },
            data: function () {
                return {
                    getWidth: '99%',
                    dataAdapter: new jqx.dataAdapter(this.source),
                    columns: [
                        { text: 'First Name', datafield: 'firstname' },
                        { text: 'Last Name', datafield: 'lastname' },
                        { text: 'Title', datafield: 'title' },
                        { text: 'City', datafield: 'city' },
                        { text: 'Country', datafield: 'country' }
                    ],
                    rowdetailstemplate: {
                        rowdetails: '&lt;div style="margin: 10px;">&lt;ul style="margin-left: 30px;">&lt;li class="title">&lt;/li>&lt;li>Notes&lt;/li>&lt;/ul>&lt;div class="information">&lt;/div>&lt;div class="notes">&lt;/div>&lt;/div>',
                        rowdetailsheight: 200
                    }
                }
            },
            beforeCreate: function () {
                const generateData = () => {
                    let data = new Array();
                    let firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];
                    let lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];
                    let titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];
                    let titleofcourtesy = ['Ms.', 'Dr.', 'Ms.', 'Mrs.', 'Mr.', 'Mr.', 'Mr.', 'Ms.', 'Ms.'];
                    let birthdate = ['08-Dec-48', '19-Feb-52', '30-Aug-63', '19-Sep-37', '04-Mar-55', '02-Jul-63', '29-May-60', '09-Jan-58', '27-Jan-66'];
                    let hiredate = ['01-May-92', '14-Aug-92', '01-Apr-92', '03-May-93', '17-Oct-93', '17-Oct-93', '02-Jan-94', '05-Mar-94', '15-Nov-94'];
                    let address = ['507 - 20th Ave. E. Apt. 2A', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House', 'Miner Rd.', 'Edgeham Hollow', 'Winchester Way', '4726 - 11th Ave. N.E.', '7 Houndstooth Rd.'];
                    let city = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'London', 'London', 'Seattle', 'London'];
                    let postalcode = ['98122', '98401', '98033', '98052', 'SW1 8JR', 'EC2 7JR', 'RG1 9SP', '98105', 'WG2 7LT'];
                    let country = ['USA', 'USA', 'USA', 'USA', 'UK', 'UK', 'UK', 'USA', 'UK'];
                    let homephone = ['(206) 555-9857', '(206) 555-9482', '(206) 555-3412', '(206) 555-8122', '(71) 555-4848', '(71) 555-7773', '(71) 555-5598', '(206) 555-1189', '(71) 555-4444'];
                    let notes = ['Education includes a BA in psychology from Colorado State University in 1970.  She also completed `The Art of the Cold Call.`  Nancy is a member of Toastmasters International.',
                        'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',
                        'Janet has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
                        'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.',
                        'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses `Successful Telemarketing` and `International Sales Management.`  He is fluent in French.',
                        'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles (MBA, marketing, 1986).  He has also taken the courses `Multi-Cultural Selling` and `Time Management for the Sales Professional.`  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
                        'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992, the year he joined the company.  After completing a course entitled `Selling in Europe,` he was transferred to the London office in March 1993.',
                        'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.',
                        'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.'];
                    let k = 0;
                    for (let i = 0; i &lt; firstNames.length; i++) {
                        let datarecord = {};
                        datarecord['firstname'] = firstNames[k];
                        datarecord['lastname'] = lastNames[k];
                        datarecord['title'] = titles[k];
                        datarecord['titleofcourtesy'] = titleofcourtesy[k];
                        datarecord['birthdate'] = birthdate[k];
                        datarecord['hiredate'] = hiredate[k];
                        datarecord['address'] = address[k];
                        datarecord['city'] = city[k];
                        datarecord['postalcode'] = postalcode[k];
                        datarecord['country'] = country[k];
                        datarecord['homephone'] = homephone[k];
                        datarecord['notes'] = notes[k];
                        data[i] = datarecord;
                        k++;
                    }
                    return data;
                };
                this.source = {
                    localdata: generateData(),
                    datatype: 'array'
                };
            },
            methods: {
                initrowdetails: function (index, parentElement, gridElement, datarecord) {
                    let tabsdiv = parentElement.children[0];
                    let information = tabsdiv.children[1];
                    let notes = tabsdiv.children[2];
                    let title = tabsdiv.children[0].children[0];
                    if (tabsdiv != null) {
                        title.innerHTML = datarecord.firstname;
                        let container = document.createElement('div');
                        container.style.margin = '5px';
                        information.appendChild(container);
                        let photocolumn = document.createElement('div');
                        let leftcolumn = document.createElement('div');
                        let rightcolumn = document.createElement('div');
                        photocolumn.style.cssText = 'float: left; width: 15%';
                        leftcolumn.style.cssText = 'float: left; width: 45%';
                        rightcolumn.style.cssText = 'float: left; width: 40%';
                        container.appendChild(photocolumn);
                        container.appendChild(leftcolumn);
                        container.appendChild(rightcolumn);
                        let image = document.createElement('div');
                        image.style.marginTop = '10px';
                        let photo = document.createElement('div');
                        photo.style.margin = '10px';
                        photo.className = 'jqx-rc-all';
                        photo.innerHTML = '&lt;b>Photo:&lt;/b>';
                        let img = document.createElement('img');
                        img.height = 60;
                        img.style.marginLeft = '10px';
                        img.src = '/images/' + datarecord.firstname.toLowerCase() + '.png';
                        image.appendChild(photo);
                        image.appendChild(img);
                        photocolumn.appendChild(image);
                        let firstname = '&lt;div style="margin: 10px;">&lt;b>First Name:&lt;/b> ' + datarecord.firstname + '&lt;/div>';
                        let lastname = '&lt;div style="margin: 10px;">&lt;b>Last Name:&lt;/b> ' + datarecord.lastname + '&lt;/div>';
                        title = '&lt;div style="margin: 10px;">&lt;b>Title:&lt;/b> ' + datarecord.title + '&lt;/div>';
                        let address = '&lt;div style="margin: 10px;">&lt;b>Address:&lt;/b> ' + datarecord.address + '&lt;/div>';
                        leftcolumn.insertAdjacentHTML('beforeend', firstname);
                        leftcolumn.insertAdjacentHTML('beforeend', lastname);
                        leftcolumn.insertAdjacentHTML('beforeend', title);
                        leftcolumn.insertAdjacentHTML('beforeend', address);
                        let postalcode = '&lt;div style="margin: 10px;">&lt;b>Postal Code:&lt;/b> ' + datarecord.postalcode + '&lt;/div>';
                        let city = '&lt;div style="margin: 10px;">&lt;b>City:&lt;/b> ' + datarecord.city + '&lt;/div>';
                        let phone = '&lt;div style="margin: 10px;">&lt;b>Phone:&lt;/b> ' + datarecord.homephone + '&lt;/div>';
                        let hiredate = '&lt;div style="margin: 10px;">&lt;b>Hire Date:&lt;/b> ' + datarecord.hiredate + '&lt;/div>';
                        rightcolumn.insertAdjacentHTML('beforeend', postalcode);
                        rightcolumn.insertAdjacentHTML('beforeend', city);
                        rightcolumn.insertAdjacentHTML('beforeend', phone);
                        rightcolumn.insertAdjacentHTML('beforeend', hiredate);
                        let notesContainer = document.createElement('div');
                        notesContainer.style.cssText = 'white-space: normal; margin: 5px;';
                        notesContainer.innerHTML = '&lt;span>' + datarecord.notes + '&lt;/span>';
                        notes.appendChild(notesContainer);
                        tabsdiv.className = 'tabs';
                        jqwidgets.createInstance('.tabs', 'jqxTabs', { theme: 'material', width: '95%', height: 170 })
                    }
                },
                ready: function () {
                    this.$refs.myGrid.showrowdetails(1);
                }
            }
        }
    &lt;/script>
</code></pre>
            </div>
        </JqxTabs>
    </div>
</template>
<script>
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';
    import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

    export default {
        components: {
            JqxTabs,
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '99%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', datafield: 'firstname' },
                    { text: 'Last Name', datafield: 'lastname' },
                    { text: 'Title', datafield: 'title' },
                    { text: 'City', datafield: 'city' },
                    { text: 'Country', datafield: 'country' }
                ],
                rowdetailstemplate: {
                    rowdetails: '<div style="margin: 10px;"><ul style="margin-left: 30px;"><li class="title"></li><li>Notes</li></ul><div class="information"></div><div class="notes"></div></div>',
                    rowdetailsheight: 200
                }
            }
        },
        beforeCreate: function () {
            const generateData = () => {
                let data = new Array();
                let firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];
                let lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];
                let titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];
                let titleofcourtesy = ['Ms.', 'Dr.', 'Ms.', 'Mrs.', 'Mr.', 'Mr.', 'Mr.', 'Ms.', 'Ms.'];
                let birthdate = ['08-Dec-48', '19-Feb-52', '30-Aug-63', '19-Sep-37', '04-Mar-55', '02-Jul-63', '29-May-60', '09-Jan-58', '27-Jan-66'];
                let hiredate = ['01-May-92', '14-Aug-92', '01-Apr-92', '03-May-93', '17-Oct-93', '17-Oct-93', '02-Jan-94', '05-Mar-94', '15-Nov-94'];
                let address = ['507 - 20th Ave. E. Apt. 2A', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House', 'Miner Rd.', 'Edgeham Hollow', 'Winchester Way', '4726 - 11th Ave. N.E.', '7 Houndstooth Rd.'];
                let city = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'London', 'London', 'Seattle', 'London'];
                let postalcode = ['98122', '98401', '98033', '98052', 'SW1 8JR', 'EC2 7JR', 'RG1 9SP', '98105', 'WG2 7LT'];
                let country = ['USA', 'USA', 'USA', 'USA', 'UK', 'UK', 'UK', 'USA', 'UK'];
                let homephone = ['(206) 555-9857', '(206) 555-9482', '(206) 555-3412', '(206) 555-8122', '(71) 555-4848', '(71) 555-7773', '(71) 555-5598', '(206) 555-1189', '(71) 555-4444'];
                let notes = ['Education includes a BA in psychology from Colorado State University in 1970.  She also completed `The Art of the Cold Call.`  Nancy is a member of Toastmasters International.',
                    'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',
                    'Janet has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
                    'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.',
                    'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses `Successful Telemarketing` and `International Sales Management.`  He is fluent in French.',
                    'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles (MBA, marketing, 1986).  He has also taken the courses `Multi-Cultural Selling` and `Time Management for the Sales Professional.`  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
                    'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992, the year he joined the company.  After completing a course entitled `Selling in Europe,` he was transferred to the London office in March 1993.',
                    'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.',
                    'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.'];
                let k = 0;
                for (let i = 0; i < firstNames.length; i++) {
                    let datarecord = {};
                    datarecord['firstname'] = firstNames[k];
                    datarecord['lastname'] = lastNames[k];
                    datarecord['title'] = titles[k];
                    datarecord['titleofcourtesy'] = titleofcourtesy[k];
                    datarecord['birthdate'] = birthdate[k];
                    datarecord['hiredate'] = hiredate[k];
                    datarecord['address'] = address[k];
                    datarecord['city'] = city[k];
                    datarecord['postalcode'] = postalcode[k];
                    datarecord['country'] = country[k];
                    datarecord['homephone'] = homephone[k];
                    datarecord['notes'] = notes[k];
                    data[i] = datarecord;
                    k++;
                }
                return data;
            };
            this.source = {
                localdata: generateData(),
                datatype: 'array'
            };
        },
        mounted: function () {
            this.$refs.code.innerHTML = formatCode(this.$refs.code.innerHTML);
        },
        methods: {
            initrowdetails: function (index, parentElement, gridElement, datarecord) {
                let tabsdiv = parentElement.children[0];
                let information = tabsdiv.children[1];
                let notes = tabsdiv.children[2];
                let title = tabsdiv.children[0].children[0];
                if (tabsdiv != null) {
                    title.innerHTML = datarecord.firstname;
                    let container = document.createElement('div');
                    container.style.margin = '5px';
                    information.appendChild(container);
                    let photocolumn = document.createElement('div');
                    let leftcolumn = document.createElement('div');
                    let rightcolumn = document.createElement('div');
                    photocolumn.style.cssText = 'float: left; width: 15%';
                    leftcolumn.style.cssText = 'float: left; width: 45%';
                    rightcolumn.style.cssText = 'float: left; width: 40%';
                    container.appendChild(photocolumn);
                    container.appendChild(leftcolumn);
                    container.appendChild(rightcolumn);
                    let image = document.createElement('div');
                    image.style.marginTop = '10px';
                    let photo = document.createElement('div');
                    photo.style.margin = '10px';
                    photo.className = 'jqx-rc-all';
                    photo.innerHTML = '<b>Photo:</b>';
                    let img = document.createElement('img');
                    img.height = 60;
                    img.style.marginLeft = '10px';
                    img.src = './images/' + datarecord.firstname.toLowerCase() + '.png';
                    image.appendChild(photo);
                    image.appendChild(img);
                    photocolumn.appendChild(image);
                    let firstname = '<div style="margin: 10px;"><b>First Name:</b> ' + datarecord.firstname + '</div>';
                    let lastname = '<div style="margin: 10px;"><b>Last Name:</b> ' + datarecord.lastname + '</div>';
                    title = '<div style="margin: 10px;"><b>Title:</b> ' + datarecord.title + '</div>';
                    let address = '<div style="margin: 10px;"><b>Address:</b> ' + datarecord.address + '</div>';
                    leftcolumn.insertAdjacentHTML('beforeend', firstname);
                    leftcolumn.insertAdjacentHTML('beforeend', lastname);
                    leftcolumn.insertAdjacentHTML('beforeend', title);
                    leftcolumn.insertAdjacentHTML('beforeend', address);
                    let postalcode = '<div style="margin: 10px;"><b>Postal Code:</b> ' + datarecord.postalcode + '</div>';
                    let city = '<div style="margin: 10px;"><b>City:</b> ' + datarecord.city + '</div>';
                    let phone = '<div style="margin: 10px;"><b>Phone:</b> ' + datarecord.homephone + '</div>';
                    let hiredate = '<div style="margin: 10px;"><b>Hire Date:</b> ' + datarecord.hiredate + '</div>';
                    rightcolumn.insertAdjacentHTML('beforeend', postalcode);
                    rightcolumn.insertAdjacentHTML('beforeend', city);
                    rightcolumn.insertAdjacentHTML('beforeend', phone);
                    rightcolumn.insertAdjacentHTML('beforeend', hiredate);
                    let notesContainer = document.createElement('div');
                    notesContainer.style.cssText = 'white-space: normal; margin: 5px;';
                    notesContainer.innerHTML = '<span>' + datarecord.notes + '</span>';
                    notes.appendChild(notesContainer);
                    tabsdiv.className = 'tabs';
                    jqwidgets.createInstance('.tabs', 'jqxTabs', { theme: 'material', width: '95%', height: 170 })
                }
            },
            ready: function () {
                this.$refs.myGrid.showrowdetails(1);
            }
        }
    }
</script>