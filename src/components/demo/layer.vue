<template>
  <div>
      <el-form :model="result" size="mini" label-width="75px">
            <el-row v-if="!fleg">
                <div class="landz_hTitle">
                  <h5 class="landz_bg">
                    <b></b>输入框——3</h5>
                </div>
              </el-row>
            <el-row v-if="!fleg">
                <el-col :span="8">
                  <el-form-item class="landz_input_3" label="五个字数的">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item class="landz_input_3 landz_doubleSize" required  label="多个字换行的">
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
                    <b></b>输入框——1/2</h5>
                </div>
              </el-row>
            <el-row >
                <el-col :span="12">
                  <el-form-item class="landz_input_2" label="五个字数的">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="landz_input_2" label="五个字数的">
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
            <el-row >
                <el-col :span="12">
                    <el-form-item class="landz_input_phone landz_doubleSize" label="电话带区号大">
                        <el-input type="text" :maxlength="100" placeholder="0086" class="landz_phoneD"></el-input><span>-</span><el-input placeholder="请输入手机号" :maxlength="100" class="landz_phoneL"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                      <el-form-item class="landz_input_phone_min landz_doubleSize" label="电话带区号小">
                          <el-input type="text" :maxlength="100" placeholder="0086" class="landz_phoneD"></el-input><span>-</span><el-input placeholder="请输入手机号" :maxlength="100" class="landz_phoneL"></el-input>
                      </el-form-item>
                    </el-col>
            </el-row>
            <el-row>
                <div class="landz_hTitle">
                  <h5 class="landz_bg">
                    <b></b>区间输入框</h5>
                </div>
              </el-row>
            <el-row >
                <el-col :span="12">
                    <el-form-item  label="区间日期" class="landz_section">
                        <el-date-picker type="date" v-model="result.date1" placeholder="选择日期"
                                        align="left" value-format="yyyy-MM-dd"></el-date-picker>
                                        <span>-</span>
                        <el-date-picker  type="date" placeholder="选择日期"
                                        value-format="yyyy-MM-dd"></el-date-picker>
                      </el-form-item>
                  </el-col>
                  <el-col :span="12">
                      <el-form-item class="landz_section" label="Q Q">
                          <el-input  placeholder="选择日期"></el-input>
                          <span>-</span>
                          <el-input  placeholder="选择日期"></el-input>
                      </el-form-item>
                    </el-col>
            </el-row>
            <el-row>
                <div class="landz_hTitle">
                  <h5 class="landz_bg">
                    <b></b>区间输入框小</h5>
                </div>
              </el-row>
            <el-row >
                <el-col :span="12">
                    <el-form-item  label="区间日期" class="landz_section_min">
                        <el-date-picker type="date" v-model="result.date2" placeholder="选择日期"
                                        align="left" value-format="yyyy-MM-dd"></el-date-picker>
                                        <span>-</span>
                        <el-date-picker  type="date" placeholder="选择日期"
                                        value-format="yyyy-MM-dd"></el-date-picker>
                      </el-form-item>
                  </el-col>
                  <el-col :span="12">
                      <el-form-item class="landz_section_min" label="Q Q">
                          <el-input  placeholder="选择日期"></el-input>
                          <span>-</span>
                          <el-input  placeholder="选择日期"></el-input>
                      </el-form-item>
                    </el-col>
            </el-row>

      </el-form>
  </div>
</template>
<script>
export default{
  data () {
    return {
      result: {
        date1: '',
        date2: ''
      }
    }
  },
  props: {
    fleg: ''
  }
}
</script>
