import { Address, beginCell, Cell, toNano } from '@ton/core';
import { Lp20ProxyCollection } from '../../../../wrappers/lp20proxy/collection/Lp20ProxyCollection';
import { compile, NetworkProvider } from '@ton/blueprint';
import { LP20_COLLECTION_ADDRESS } from '../../../cosnt/const';


export async function run(provider: NetworkProvider) {
    const lp20ProxyCollection = provider.open(Lp20ProxyCollection.createFromAddress(Address.parse("EQB0uMfMB1WF8AlMxLq3eoN8c-KLAxt3oWsYVWkbX5y299p1")));

    await lp20ProxyCollection.sendTestItemMint(
        provider.sender(),  
        toNano("0.1"), 
        Address.parse("0QANsjLvOX2MERlT4oyv2bSPEVc9lunSPIs5a1kPthCXydUX")
    );

}
