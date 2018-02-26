<template>
  <div class="wrapper">
    <el-form :model="result" size="mini" label-width="75px">
      <el-row>
        <div class="landz_hTitle">
          <h5 class="landz_bg">
            <b></b>按钮</h5>
        </div>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="基础按钮">
            <button class="landz_btn_base" type="button">基础按钮</button>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="基础按钮">
            <button class="landz_btn_base_min" type="button">基础按钮</button>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="线框按钮">
            <button class="landz_btn_line" type="button">线框按钮</button>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="线框按钮">
            <button class="landz_btn_line_min" type="button">线框按钮</button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="landz_hTitle">
          <h5 class="landz_bg">
            <b></b>输入框——3</h5>
        </div>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item class="landz_input_3" label="五个字数的">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="landz_input_3 landz_doubleSize" required label="多个字换行的">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="landz_input_3" required label="一行多字ab" label-width="78px">
            <el-input></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="landz_hTitle">
          <h5 class="landz_bg">
            <b></b>输入框——4</h5>
        </div>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item class="landz_input_4" label="五个字数的">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item class="landz_input_4 landz_doubleSize" label="多个字换行的">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item class="landz_input_4" label="一行多字ab" label-width="78px">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item class="landz_input_4" label="一行多字ab" label-width="78px">
            <el-input></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="landz_hTitle">
          <h5 class="landz_bg">
            <b></b>带区号的电话号码</h5>
        </div>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item class="landz_input_phone landz_doubleSize" label="电话带区号大">
            <el-input type="text" :maxlength="100" placeholder="0086" class="landz_phoneD"></el-input>
            <span>-</span>
            <el-input placeholder="请输入手机号" :maxlength="100" class="landz_phoneL"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item class="landz_input_phone_min landz_doubleSize" label="电话带区号小">
            <el-input type="text" :maxlength="100" placeholder="0086" class="landz_phoneD"></el-input>
            <span>-</span>
            <el-input placeholder="请输入手机号" :maxlength="100" class="landz_phoneL"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="landz_hTitle">
          <h5 class="landz_bg">
            <b></b>区间输入框</h5>
        </div>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="区间日期" class="landz_section">
            <el-date-picker type="date" v-model="result.date1" placeholder="选择日期" align="left" value-format="yyyy-MM-dd"></el-date-picker>
            <span>-</span>
            <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="landz_section" label="Q Q">
            <el-input placeholder="选择日期"></el-input>
            <span>-</span>
            <el-input placeholder="选择日期"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="landz_hTitle">
          <h5 class="landz_bg">
            <b></b>区间输入框小</h5>
        </div>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="区间日期" class="landz_section_min">
            <el-date-picker type="date" v-model="result.date2" placeholder="选择日期" align="left" value-format="yyyy-MM-dd"></el-date-picker>
            <span>-</span>
            <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="landz_section_min" label="Q Q">
            <el-input placeholder="选择日期"></el-input>
            <span>-</span>
            <el-input placeholder="选择日期"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="landz_hTitle">
          <h5>
            <b></b>弹窗的输入框</h5>
        </div>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label-width="0">
            <button class="landz_btn_base" @click="result.layerShow=true" type="button">点击出弹窗1000px</button>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="0">
            <button class="landz_btn_base" @click="result.layerShow2=true" type="button">点击出弹窗800px</button>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="0">
            <button class="landz_btn_base" @click="result.layerShow3=true" type="button">点击出弹窗700px</button>
          </el-form-item>
        </el-col>
        <ex-dialog :visible.sync="result.layerShow" title="弹窗标题" width="1000px">
          <Layer></Layer>
        </ex-dialog>
        <ex-dialog :visible.sync="result.layerShow2" title="弹窗标题" width="800px">
          <Layer fleg="true"></Layer>
        </ex-dialog>
        <ex-dialog :visible.sync="result.layerShow3" title="弹窗标题" width="700px">
          <Layer fleg="true"></Layer>
        </ex-dialog>
      </el-row>
      <el-row>
        <div class="landz_hTitle">
          <h5 class="landz_bg">
            <b></b>字体颜色</h5>
        </div>
      </el-row>
      <el-row>
        <el-col :span="5">
          <h3 class="landz_black">#333333</h3>
        </el-col>
        <el-col :span="5">
          <h3 class="landz_grey">#999999</h3>
        </el-col>
        <el-col :span="5">
          <h3 class="landz_blue">#3E7DEF</h3>
        </el-col>
        <el-col :span="5">
          <h3 class="landz_red">#FE0019</h3>
        </el-col>
        <el-col :span="4">
          <h3 class="landz_white">#FFFFFF</h3>
        </el-col>
      </el-row>
      <el-row>
        <div class="landz_bTitle">
          <h5 class="landz_bg">
            面包屑</h5>
        </div>
      </el-row>
      <el-row>
        <div class="landz_locatedNow">
          当前位置：
          <router-link :to="{name:'EbSignList'}">电商合同&gt;</router-link>
          <span>电商详情</span>
        </div>
      </el-row>
      <el-row>
        <div class="landz_bTitle">
          <h5 class="landz_bg">
            进度条</h5>
        </div>
      </el-row>
      <el-row>
        <el-progress :percentage="30"  :stroke-width="10"></el-progress>
      </el-row>
      <el-row>
        <ul class="landz_auditSchedule">
          <li>
            <dl>
              <dt></dt>
              <dd>提交申请
                <span class="line"></span>
              </dd>
            </dl>
          </li>
          <li  class="going">
            <dl>
              <dt></dt>
              <dd>主管审核
                <span class="line"></span>
              </dd>
            </dl>
          </li>
          <li >
            <dl>
              <dt ></dt>
              <dd>经理审核
                <span class="line"></span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt></dt>
              <dd>财务审核<span class="line"></span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt></dt>
              <dd>上传确认单</dd>
            </dl>
          </li>
        </ul>
      </el-row>
      <el-row>
        <div class="landz_bTitle">
          <h5 class="landz_bg">
            文本展示</h5>
        </div>
      </el-row>
      <div class="landz_txt">
        <el-row >
          <el-col :span="6">
            <label>客户姓名</label>
            <b>蔡女士蔡女士</b>
          </el-col>
          <el-col :span="6">
            <label>客户姓名方</label>
            <b>蔡女士蔡女士</b>
          </el-col>
          <el-col :span="6">
            <label>客户姓发</label>
            <b>蔡女士蔡女士</b>
          </el-col>
          <el-col :span="6">
            <label>客户姓名</label>
            <b>蔡女士蔡女士</b>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <label  class="landz_doubleSize">客名户姓名户姓名</label>
            <b>蔡女士蔡女士</b>
          </el-col>
          <el-col :span="6">
            <label>客户姓名户</label>
            <b>蔡女士蔡女士</b>
          </el-col>
          <el-col :span="6">
            <label>客户姓发名姓名方</label>
            <b>蔡女士蔡女士蔡女士蔡女士蔡女士蔡女士蔡女士蔡女士</b>
            <i>icon</i>
          </el-col>
          <el-col :span="6">
            <label>法师打发</label>
            <b>蔡女士蔡女士蔡女士蔡女士蔡女士蔡女士蔡女士蔡女士</b>
          </el-col>
        </el-row>
      </div>
      <Cropper v-if="cropper" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=164104570,3489576029&fm=27&gp=0.jpg"
               :aspectRatio="[200,100]"
               style="margin:0 auto"></Cropper>
      <el-button @click="cropper = true">图片剪切</el-button>
    </el-form>
  </div>
</template>
<script>
  import Layer from './layer.vue'
  import {plugins, $axios, timer} from 'landz-ui'

  let Cropper = plugins['Cropper']

  export default {
    data() {
      return {
        cropper: false,
        result: {
          data1: '',
          data2: '',
          layerShow: false,
          layerShow2: false,
          layerShow3: false
        }
      }
    },
    mounted() {
      console.log('框架挂载===>')
      console.log(this.fw)
      console.log('axios===>')
      console.log($axios)
      console.log('api工具函数===>')
      console.log(timer)
    },
    components: {
      Layer,
      Cropper
    }
  }
</script>
